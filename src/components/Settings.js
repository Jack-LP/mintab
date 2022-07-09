import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import SettingsBtn from './SettingsBtn';
import SettingsDrawer from './SettingsDrawer';

const Settings = ({
  linksArray,
  setLinksArray,
  wallpaper,
  setWallpaper,
  greeting,
  setGreeting,
  setBrightness,
  brightness,
  blur,
  setBlur,
  engine,
  setEngine,
  searchColor,
  setSearchColor,
  bgColor,
  setBgColor,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SettingsBtn handleClick={onOpen} isOpen={isOpen} />
      <SettingsDrawer
        isOpen={isOpen}
        onClose={onClose}
        linksArray={linksArray}
        setLinksArray={setLinksArray}
        wallpaper={wallpaper}
        setWallpaper={setWallpaper}
        setGreeting={setGreeting}
        setBrightness={setBrightness}
        brightness={brightness}
        blur={blur}
        setBlur={setBlur}
        engine={engine}
        setEngine={setEngine}
        searchColor={searchColor}
        setSearchColor={setSearchColor}
        greeting={greeting}
        bgColor={bgColor}
        setBgColor={setBgColor}
      />
    </>
  );
};

export default Settings;
