import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { getFromStorage, setToStorage } from '../accessLocalStorage';
import { Flex } from '@chakra-ui/react';
import Wallpaper from '../components/display/Wallpaper';
import Settings from '../components/settings/Settings';
import Clock from '../components/display/Clock';
import SearchBar from '../components/display/SearchBar';
import Bookmarks from '../components/display/Bookmarks';

const Home: NextPage = () => {
  const [wallpaperSrc, setWallpaperSrc] = useState(
    getFromStorage('wallpaperStorage', false) ||
      'https://i.imgur.com/sdi5CrG.jpg'
  );

  const [blur, setBlur] = useState(getFromStorage('blur', false) || 0);

  const [brightness, setBrightness] = useState(
    getFromStorage('brightness', false) || 1
  );

  const [bgColor, setBgColor] = useState(
    getFromStorage('bgColorStorage', false) || '#282828'
  );

  const [bookmarksArray, setBookmarksArray] = useState(
    getFromStorage('bookmarksStorage', true) || []
  );

  const [useIcon, setUseIcon] = useState(
    getFromStorage('useIcon', false) || ['false']
  );

  setToStorage('wallpaperStorage', wallpaperSrc);
  setToStorage('blur', blur);
  setToStorage('brightness', brightness);
  setToStorage('bgColorStorage', bgColor);
  setToStorage('bookmarksStorage', JSON.stringify(bookmarksArray));
  setToStorage('useIcon', useIcon);

  return (
    <>
      <Head>
        <title>mintab</title>
      </Head>
      <Flex
        w='100vw'
        h='100vh'
        justify='center'
        align='center'
        bgColor={wallpaperSrc === '' ? `${bgColor}` : 'transparent'}
      >
        <Wallpaper
          wallpaperSrc={wallpaperSrc}
          brightness={brightness}
          blur={blur}
        />
        <Flex direction='column' gap='4' align='center'>
          <Clock />
          <SearchBar />
          <Bookmarks bookmarksArray={bookmarksArray} useIcon={useIcon} />
          <Settings
            wallpaperSrc={wallpaperSrc}
            setWallpaperSrc={setWallpaperSrc}
            brightness={brightness}
            setBrightness={setBrightness}
            blur={blur}
            setBlur={setBlur}
            bgColor={bgColor}
            setBgColor={setBgColor}
            bookmarksArray={bookmarksArray}
            setBookmarksArray={setBookmarksArray}
            useIcon={useIcon}
            setUseIcon={setUseIcon}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
