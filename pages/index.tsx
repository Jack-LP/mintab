import type { NextPage } from 'next';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import Settings from '../components/settings/Settings';
import Clock from '../components/display/Clock';
import SearchBar from '../components/display/SearchBar';
import Bookmarks from '../components/display/Bookmarks';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>mintab</title>
      </Head>
      <Flex w='100vw' h='100vh' justify='center' align='center'>
        <Flex direction='column' gap='4' align='center'>
          <Clock />
          <SearchBar />
          <Bookmarks />
          <Settings />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
