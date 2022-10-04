import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import Background from '../components/display/Background';
import SettingsDrawer from '../components/settings/SettingsDrawer';
import Clock from '../components/display/Clock';
import Greeting from '../components/display/Greeting';
import Search from '../components/display/Search';
import Bookmarks from '../components/display/Bookmarks';

export default function Home() {
  return (
    <>
      <Head>
        <title>mintab</title>
      </Head>
      <Flex
        w='100vw'
        h='100vh'
        direction='column'
        justify='center'
        align='center'
        gap='4'
      >
        <Background />
        <SettingsDrawer />
        <Flex direction='column' gap='2' alignItems='center'>
          <Clock />
          <Greeting />
        </Flex>
        <Search />
        <Bookmarks />
      </Flex>
    </>
  );
}
