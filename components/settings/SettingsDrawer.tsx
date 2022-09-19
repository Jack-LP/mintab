import React from 'react';
import Image from 'next/image';
import { Drawer, DrawerContent, DrawerBody, Flex } from '@chakra-ui/react';
import mintabLogo from '../../public/mintab-logo.svg';
import Bookmarks from './Bookmarks';
import Wallpaper from './Wallpaper';

const SettingsDrawer = ({
  isOpen,
  onClose,
  wallpaperSrc,
  setWallpaperSrc,
  blur,
  setBlur,
  brightness,
  setBrightness,
  bgColor,
  setBgColor,
  bookmarksArray,
  setBookmarksArray,
  useIcon,
  setUseIcon,
}) => {
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerContent bg='#00000030' backdropFilter='blur(8px)'>
        <Flex
          w='100%'
          align='center'
          justify='center'
          borderBottomWidth='1px'
          p='5'
        >
          <Image src={mintabLogo} alt='mintab' width='150px' height='30px' />
        </Flex>
        <DrawerBody>
          <Flex direction='column' gap='8'>
            <Bookmarks
              bookmarksArray={bookmarksArray}
              setBookmarksArray={setBookmarksArray}
              useIcon={useIcon}
              setUseIcon={setUseIcon}
            />
            <Wallpaper
              wallpaperSrc={wallpaperSrc}
              setWallpaperSrc={setWallpaperSrc}
              brightness={brightness}
              setBrightness={setBrightness}
              blur={blur}
              setBlur={setBlur}
              bgColor={bgColor}
              setBgColor={setBgColor}
            />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SettingsDrawer;
