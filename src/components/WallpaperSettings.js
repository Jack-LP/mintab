import React, { useState } from 'react';
import {
  Stack,
  Heading,
  FormControl,
  Input,
  IconButton,
  useToast,
  Tag,
  Box,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon, DownloadIcon } from '@chakra-ui/icons/';
import CustomSlider from './CustomSlider';
import ColorSelect from './ColorSelect';

const AddWallpaper = ({
  wallpaper,
  setWallpaper,
  setBrightness,
  brightness,
  blur,
  setBlur,
  bgColor,
  setBgColor,
}) => {
  const imgPattern = new RegExp(
    /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/
  );
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
        status: 'info',
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
      <Stack spacing={wallpaper === '' ? '2' : '4'}>
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
        <Tag
          display={wallpaper === '' ? 'none' : 'flex'}
          flexDirection="column"
          w="100%"
          alignItems="center"
          p="2"
          gap="2"
        >
          <Box display="flex" alignItems="center">
            <img
              src={wallpaper}
              alt="Wallpaper preview"
              style={{
                borderRadius: '12px',
                width: '250px',
                height: '145px',
                objectFit: 'cover',
              }}
            />
          </Box>
          <Box display="flex" gap="2" w="100%">
            <a
              href={`http://localhost:3000/mintab/${wallpaper}`}
              download="mintab-wallpaper"
              style={{ width: '100%' }}
            >
              <IconButton variant="outline" w="100%" bg="transparent">
                <DownloadIcon />
              </IconButton>
            </a>
            <IconButton
              variant="outline"
              w="100%"
              onClick={() => setWallpaper('')}
              bg="transparent"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Tag>
        <Stack spacing="2">
          <CustomSlider
            wallpaper={wallpaper}
            value={brightness}
            setValue={setBrightness}
            heading={'Brightness'}
          />
          <CustomSlider
            wallpaper={wallpaper}
            value={blur}
            setValue={setBlur}
            heading={'Blur'}
          />
        </Stack>
        {wallpaper === '' ? (
          <ColorSelect
            color={bgColor}
            setColor={setBgColor}
            title={'Background Color'}
            wallpaper={wallpaper}
          />
        ) : null}
      </Stack>
    </Stack>
  );
};

export default AddWallpaper;
