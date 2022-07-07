import React, { useState, useEffect } from 'react';
import '@fontsource/space-mono/400.css';
import { ChakraProvider, Box, VStack } from '@chakra-ui/react';
import theme from './theme';
import Wallpaper from './components/Wallpaper';
import Clock from './components/Clock';
import SearchBar from './components/SearchBar';
import Links from './components/Links';
import Settings from './components/Settings';
import CustomGreeting from './components/CustomGreeting';

function App() {
  const [linksArray, setLinksArray] = useState(
    JSON.parse(localStorage.getItem('linkStorage')) || []
  );

  const [wallpaper, setWallpaper] = useState(
    localStorage.getItem('wallpaperStorage') ||
      'https://i.imgur.com/4GsPuXt.jpg'
  );

  const [greeting, setGreeting] = useState(
    localStorage.getItem('greetingStorage') || ''
  );

  const [brightness, setBrightness] = useState(
    localStorage.getItem('brightness') || 1
  );

  const [blur, setBlur] = useState(localStorage.getItem('blur') || 0);

  const [engine, setEngine] = useState(
    localStorage.getItem('engine') || 'http://google.com/search'
  );

  const [searchColor, setSearchColor] = useState(
    localStorage.getItem('searchColor') || '#ffffff'
  );

  useEffect(
    () => {
      localStorage.setItem('linkStorage', JSON.stringify(linksArray));
    },
    [linksArray],
    localStorage.setItem('wallpaperStorage', wallpaper),
    localStorage.setItem('greetingStorage', greeting),
    localStorage.setItem('brightness', brightness),
    localStorage.setItem('blur', blur),
    localStorage.setItem('engine', engine),
    localStorage.setItem('searchColor', searchColor),
    localStorage.setItem('chakra-ui-color-mode', theme.initialColorMode)
  );

  return (
    <ChakraProvider theme={theme}>
      <Box
        w="100vw"
        h="100vh"
        bg="transparent"
        color="white"
        fontSize="30"
        alignItems="center"
        justifyContent="center"
        display="flex"
        fontFamily="fonts.mono"
      >
        <Wallpaper
          wallpaperSrc={wallpaper}
          brightness={brightness}
          blur={blur}
        />
        <VStack>
          <Clock />
          <CustomGreeting greeting={greeting} />
          <SearchBar engine={engine} searchColor={searchColor} />
          <Links linksArray={linksArray} />
          <Settings
            linksArray={linksArray}
            setLinksArray={setLinksArray}
            setWallpaper={setWallpaper}
            greeting={greeting}
            setGreeting={setGreeting}
            brightness={brightness}
            setBrightness={setBrightness}
            blur={blur}
            setBlur={setBlur}
            engine={engine}
            setEngine={setEngine}
            searchColor={searchColor}
            setSearchColor={setSearchColor}
          />
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
