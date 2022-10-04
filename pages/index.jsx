import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import Search from '../components/display/Search';

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
      <Search />
    </Flex>
  );
}
