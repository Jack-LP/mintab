import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import SettingsBtn from './SettingsBtn';
import SettingsDrawer from './SettingsDrawer';

const Settings = ({
  linksArray,
  setLinksArray,
  wallpaper,
  setWallpaper,
  username,
  setUsername,
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
  clockFormat,
  setClockFormat,
  useIcon,
  setUseIcon,
  clockColor,
  setClockColor,
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
        setUsername={setUsername}
        setBrightness={setBrightness}
        brightness={brightness}
        blur={blur}
        setBlur={setBlur}
        engine={engine}
        setEngine={setEngine}
        searchColor={searchColor}
        setSearchColor={setSearchColor}
        username={username}
        bgColor={bgColor}
        setBgColor={setBgColor}
        clockFormat={clockFormat}
        setClockFormat={setClockFormat}
        useIcon={useIcon}
        setUseIcon={setUseIcon}
        clockColor={clockColor}
        setClockColor={setClockColor}
      />
    </>
  );
};

export default Settings;
