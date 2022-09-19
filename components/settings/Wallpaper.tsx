import React, { useState } from 'react';
import {
  Flex,
  Heading,
  FormControl,
  Input,
  IconButton,
  Tag,
  Box,
  useToast,
} from '@chakra-ui/react';
import { saveAs } from 'file-saver';
import Image from 'next/image';
import { AddIcon, DeleteIcon, DownloadIcon } from '@chakra-ui/icons/';
import CustomSlider from './CustomSlider';
import ColorSelect from './ColorSelect';

const Wallpaper = ({
  wallpaperSrc,
  setWallpaperSrc,
  brightness,
  setBrightness,
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
      setWallpaperSrc(wallpaperEntry);
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

  function saveWallpaper() {
    saveAs(wallpaperSrc, 'mintab-wallpaper');
  }

  return (
    <Flex direction='column' gap='2' align='center'>
      <Heading alignSelf='start' size='md' mb='2'>
        Wallpaper
      </Heading>
      <Flex direction='column' gap={wallpaperSrc === '' ? '2' : '4'}>
        <FormControl display='flex' gap='2'>
          <Input
            value={wallpaperEntry}
            placeholder='Link to Image'
            onChange={wallpaperChange}
            onKeyDown={handleKeyDown}
          ></Input>
          <IconButton aria-label='' onClick={addWallpaper}>
            <AddIcon />
          </IconButton>
        </FormControl>
        <Tag
          display={wallpaperSrc === '' ? 'none' : 'flex'}
          flexDirection='column'
          w='100%'
          alignItems='center'
          p='2'
          gap='2'
        >
          <Box display='flex' alignItems='center'>
            <Image
              src={wallpaperSrc}
              width='250px'
              height='145px'
              alt='Wallpaper preview'
              quality={50}
              style={{
                borderRadius: '12px',
                objectFit: 'cover',
              }}
            />
          </Box>
          <Box display='flex' gap='2' w='100%'>
            <IconButton
              aria-label=''
              variant='outline'
              w='100%'
              bg='transparent'
              onClick={saveWallpaper}
            >
              <DownloadIcon />
            </IconButton>
            <IconButton
              aria-label=''
              variant='outline'
              w='100%'
              onClick={() => setWallpaperSrc('')}
              bg='transparent'
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Tag>
        <Flex direction='column'>
          <CustomSlider
            wallpaper={wallpaperSrc}
            value={brightness}
            setValue={setBrightness}
            heading={'Brightness'}
          />
          <CustomSlider
            wallpaper={wallpaperSrc}
            value={blur}
            setValue={setBlur}
            heading={'Blur'}
          />
        </Flex>
        {wallpaperSrc === '' ? (
          <ColorSelect
            color={bgColor}
            setColor={setBgColor}
            title={'Background Color'}
          />
        ) : null}
      </Flex>
    </Flex>
  );
};

export default Wallpaper;
