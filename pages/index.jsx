import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import SettingsDrawer from '../components/settings/SettingsDrawer';
import Search from '../components/display/Search';
import Bookmarks from '../components/display/Bookmarks';

export default function Home() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      direction='column'
      justify='center'
      align='center'
    >
      <Head>
        <title>mintab</title>
      </Head>
      <SettingsDrawer />
      <Search />
      <Bookmarks />
    </Flex>
  );
}
