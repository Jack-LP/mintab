import React from 'react';
import {
  Stack,
  Drawer,
  DrawerContent,
  DrawerBody,
  VStack,
  Box,
} from '@chakra-ui/react';
import { ReactComponent as Logo } from '../img/mintab-light.svg';
import LinksSettings from './LinksSettings';
import WallpaperSettings from './WallpaperSettings';
import GreetingSettings from './GreetingSettings';
import SearchBarSettings from './SearchBarSettings';
import ClockSettings from './ClockSettings';
import DefaultSettings from './DefaultSettings';

const SettingsDrawer = ({
  isOpen,
  onClose,
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
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerContent bg="#00000030" backdropFilter="blur(8px)">
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderBottomWidth="1px"
          p="5"
        >
          <Logo width="150px" height="30px" />
        </Box>
        <DrawerBody style={{ scrollbarWidth: 'none' }} mt="5">
          <Stack spacing="10">
            <ClockSettings
              clockFormat={clockFormat}
              setClockFormat={setClockFormat}
              clockColor={clockColor}
              setClockColor={setClockColor}
            />
            <VStack alignItems="flex-start">
              <LinksSettings
                linksArray={linksArray}
                setLinksArray={setLinksArray}
                useIcon={useIcon}
                setUseIcon={setUseIcon}
              />
            </VStack>
            <WallpaperSettings
              wallpaper={wallpaper}
              setWallpaper={setWallpaper}
              setBrightness={setBrightness}
              brightness={brightness}
              blur={blur}
              setBlur={setBlur}
              bgColor={bgColor}
              setBgColor={setBgColor}
            />
            <GreetingSettings username={username} setUsername={setUsername} />
            <SearchBarSettings
              engine={engine}
              setEngine={setEngine}
              searchColor={searchColor}
              setSearchColor={setSearchColor}
            />
            <DefaultSettings />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SettingsDrawer;
