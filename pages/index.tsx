import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { getFromStorage, setToStorage } from '../accessLocalStorage';
import { Flex } from '@chakra-ui/react';
import Settings from '../components/settings/Settings';
import Clock from '../components/display/Clock';
import SearchBar from '../components/display/SearchBar';
import Bookmarks from '../components/display/Bookmarks';

const Home: NextPage = () => {
  const [bookmarksArray, setBookmarksArray] = useState(
    getFromStorage('bookmarksStorage') || []
  );

  const [useIcon, setUseIcon] = useState(
    getFromStorage('useIcon') || ['false']
  );

  setToStorage('bookmarksStorage', JSON.stringify(bookmarksArray));
  setToStorage('useIcon', useIcon);

  return (
    <>
      <Head>
        <title>mintab</title>
      </Head>
      <Flex w='100vw' h='100vh' justify='center' align='center'>
        <Flex direction='column' gap='4' align='center'>
          <Clock />
          <SearchBar />
          <Bookmarks bookmarksArray={bookmarksArray} useIcon={useIcon} />
          <Settings
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
