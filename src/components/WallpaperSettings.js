import React, { useState } from 'react';
import {
  Stack,
  Heading,
  FormControl,
  Input,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons/';
import CustomSlider from './CustomSlider';

const AddWallpaper = ({
  setWallpaper,
  setBrightness,
  brightness,
  blur,
  setBlur,
}) => {
  const imgPattern = new RegExp(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/);
  const toast = useToast();
  const [wallpaperEntry, setWallpaperEntry] = useState('');

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      addWallpaper();
    }
  }

  function wallpaperChange(event) {
    setWallpaperEntry(event.target.value);
  }

  function addWallpaper() {
    if (!!imgPattern.test(wallpaperEntry)) {
      setWallpaper(wallpaperEntry);
      setWallpaperEntry('');
      toast({
        position: 'bottom-left',
        title: 'Wallpaper changed',
        status: 'success',
        variant: 'left-accent',
        duration: 1000,
        isClosable: false,
      });
    } else {
      return null;
    }
  }

  return (
    <Stack spacing="2">
      <Heading size="md">Wallpaper</Heading>
      <Stack spacing="6">
        <FormControl display="flex" gap="4">
          <Input
            value={wallpaperEntry}
            placeholder="Link to Image"
            onChange={wallpaperChange}
            onKeyDown={handleKeyDown}
          ></Input>
          <IconButton onClick={addWallpaper}>
            <AddIcon />
          </IconButton>
        </FormControl>
        <Stack spacing="2">
          <CustomSlider
            value={brightness}
            setValue={setBrightness}
            heading={'Brightness'}
          />
          <CustomSlider value={blur} setValue={setBlur} heading={'Blur'} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AddWallpaper;
