import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import SettingsBtn from './SettingsBtn';
import SettingsDrawer from './SettingsDrawer';

const Settings = ({
  linksArray,
  setLinksArray,
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
      />
    </>
  );
};

export default Settings;
