import React, { useState } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import theme from './theme';
import Wallpaper from './components/Wallpaper';
import Clock from './components/Clock';
import SearchBar from './components/SearchBar';
import Links from './components/Links';
import Settings from './components/Settings';
import Greeting from './components/Greeting';

function App() {
  // Create state for each setting
  const [wallpaper, setWallpaper] = useState(
    localStorage.getItem('wallpaperStorage') ||
      'https://i.imgur.com/sdi5CrG.jpg'
  );

  const [bgColor, setBgColor] = useState(
    localStorage.getItem('bgColorStorage') || '#282828'
  );

  const [brightness, setBrightness] = useState(
    localStorage.getItem('brightness') || 1
  );

  const [blur, setBlur] = useState(localStorage.getItem('blur') || 0);

  const [clockFormat, setClockFormat] = useState(
    localStorage.getItem('clockFormat') || 'en-GB'
  );

  const [clockColor, setClockColor] = useState(
    localStorage.getItem('clockColor') || '#ffffff'
  );

  const [linksArray, setLinksArray] = useState(
    JSON.parse(localStorage.getItem('linkStorage')) || []
  );

  const [useIcon, setUseIcon] = useState(
    localStorage.getItem('useIcon') || false
  );

  const [username, setUsername] = useState(
    localStorage.getItem('username') || ''
  );

  const [engine, setEngine] = useState(
    localStorage.getItem('engine') || 'http://google.com/search'
  );

  const [searchColor, setSearchColor] = useState(
    localStorage.getItem('searchColor') || '#ffffff'
  );

  // Store settings in local storage
  localStorage.setItem('chakra-ui-color-mode', theme.initialColorMode);
  localStorage.setItem('wallpaperStorage', wallpaper);
  localStorage.setItem('bgColorStorage', bgColor);
  localStorage.setItem('brightness', brightness);
  localStorage.setItem('blur', blur);
  localStorage.setItem('clockFormat', clockFormat);
  localStorage.setItem('clockColor', clockColor);
  localStorage.setItem('linkStorage', JSON.stringify(linksArray));
  localStorage.setItem('useIcon', useIcon);
  localStorage.setItem('username', username);
  localStorage.setItem('engine', engine);
  localStorage.setItem('searchColor', searchColor);

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
        <Clock clockFormat={clockFormat} clockColor={clockColor} />
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
          clockColor={clockColor}
          setClockColor={setClockColor}
        />
      </VStack>
    </Box>
  );
}

export default App;
