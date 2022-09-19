import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import SettingsBtn from './SettingsBtn';
import SettingsDrawer from './SettingsDrawer';

const Settings = ({
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SettingsBtn handleClick={onOpen} isOpen={isOpen} />
      <SettingsDrawer
        isOpen={isOpen}
        onClose={onClose}
        wallpaperSrc={wallpaperSrc}
        setWallpaperSrc={setWallpaperSrc}
        blur={blur}
        setBlur={setBlur}
        brightness={brightness}
        setBrightness={setBrightness}
        bgColor={bgColor}
        setBgColor={setBgColor}
        bookmarksArray={bookmarksArray}
        setBookmarksArray={setBookmarksArray}
        useIcon={useIcon}
        setUseIcon={setUseIcon}
      />
    </>
  );
};

export default Settings;
