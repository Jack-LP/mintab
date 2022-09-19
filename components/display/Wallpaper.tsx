import React from 'react';
import { Image } from '@chakra-ui/react';

const Wallpaper = ({ wallpaperSrc, brightness, blur }) => {
  return (
    <Image
      alt=''
      src={wallpaperSrc}
      w='100vw'
      h='100vh'
      position='absolute'
      zIndex='-1'
      filter={`brightness(${brightness}) blur(${blur * 10}px)`}
      objectFit='cover'
    />
  );
};

export default Wallpaper;
