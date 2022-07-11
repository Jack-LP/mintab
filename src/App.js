import React, { useState, useEffect } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import theme from './theme';
import Wallpaper from './components/Wallpaper';
import Clock from './components/Clock';
import SearchBar from './components/SearchBar';
import Links from './components/Links';
import Settings from './components/Settings';
import Greeting from './components/Greeting';

function App() {
  const [linksArray, setLinksArray] = useState(
    JSON.parse(localStorage.getItem('linkStorage')) || []
  );

  const [wallpaper, setWallpaper] = useState(
    localStorage.getItem('wallpaperStorage') ||
      'https://i.imgur.com/sdi5CrG.jpg'
  );

  const [bgColor, setBgColor] = useState(
    localStorage.getItem('bgColorStorage') || '#282828'
  );

  const [username, setUsername] = useState(
    localStorage.getItem('username') || ''
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

  const [clockFormat, setClockFormat] = useState(
    localStorage.getItem('clockFormat') || 'en-GB'
  );

  const [useIcon, setUseIcon] = useState(
    localStorage.getItem('useIcon') || true
  );

  useEffect(() => {
    localStorage.setItem('linkStorage', JSON.stringify(linksArray));
    localStorage.setItem('wallpaperStorage', wallpaper);
    localStorage.setItem('bgColorStorage', bgColor);
    localStorage.setItem('username', username);
    localStorage.setItem('brightness', brightness);
    localStorage.setItem('blur', blur);
    localStorage.setItem('engine', engine);
    localStorage.setItem('searchColor', searchColor);
    localStorage.setItem('clockFormat', clockFormat);
    localStorage.setItem('useIcon', useIcon);
    localStorage.setItem('chakra-ui-color-mode', theme.initialColorMode);
  }, [
    linksArray,
    wallpaper,
    username,
    brightness,
    blur,
    engine,
    searchColor,
    bgColor,
    clockFormat,
    useIcon,
  ]);

  return (
    <Box
      w="100vw"
      h="100vh"
      bg={wallpaper === '' ? `${bgColor}` : 'transparent'}
      color="white"
      fontSize="30"
      alignItems="center"
      justifyContent="center"
      display="flex"
    >
      <Wallpaper wallpaperSrc={wallpaper} brightness={brightness} blur={blur} />
      <VStack>
        <Clock clockFormat={clockFormat} />
        <Greeting username={username} />
        <SearchBar
          engine={engine}
          setEngine={setEngine}
          searchColor={searchColor}
        />
        <Links linksArray={linksArray} useIcon={useIcon} />
        <Settings
          linksArray={linksArray}
          setLinksArray={setLinksArray}
          wallpaper={wallpaper}
          setWallpaper={setWallpaper}
          username={username}
          setUsername={setUsername}
          brightness={brightness}
          setBrightness={setBrightness}
          blur={blur}
          setBlur={setBlur}
          engine={engine}
          setEngine={setEngine}
          searchColor={searchColor}
          setSearchColor={setSearchColor}
          bgColor={bgColor}
          setBgColor={setBgColor}
          clockFormat={clockFormat}
          setClockFormat={setClockFormat}
          useIcon={useIcon}
          setUseIcon={setUseIcon}
        />
      </VStack>
    </Box>
  );
}

export default App;
