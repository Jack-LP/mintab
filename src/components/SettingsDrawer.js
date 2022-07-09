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
import SetCustomGreeting from './SetCustomGreeting';
import SearchBarSettings from './SearchBarSettings';

const SettingsDrawer = ({
  isOpen,
  onClose,
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
            <VStack alignItems="flex-start">
              <LinksSettings
                linksArray={linksArray}
                setLinksArray={setLinksArray}
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
            <SetCustomGreeting greeting={greeting} setGreeting={setGreeting} />
            <SearchBarSettings
              engine={engine}
              setEngine={setEngine}
              searchColor={searchColor}
              setSearchColor={setSearchColor}
            />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SettingsDrawer;
