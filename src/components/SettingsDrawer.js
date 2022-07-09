import React from 'react';
import {
  Stack,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from '@chakra-ui/react';
import LinksSettings from './LinksSettings';
import WallpaperSettings from './WallpaperSettings';
import SetCustomGreeting from './SetCustomGreeting';
import SearchBarSettings from './SearchBarSettings';

const SettingsDrawer = ({
  isOpen,
  onClose,
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
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerContent bg="#00000030" backdropFilter="blur(8px)">
        <DrawerHeader borderBottomWidth="1px">
          <DrawerCloseButton mt="2" />
          Settings
        </DrawerHeader>
        <DrawerBody style={{ scrollbarWidth: 'none' }}>
          <Stack spacing="10">
            <VStack alignItems="flex-start">
              <LinksSettings
                linksArray={linksArray}
                setLinksArray={setLinksArray}
              />
            </VStack>
            <WallpaperSettings
              setWallpaper={setWallpaper}
              setBrightness={setBrightness}
              brightness={brightness}
              blur={blur}
              setBlur={setBlur}
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
