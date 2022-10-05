import React from 'react';
import { Flex, Heading, Button } from '@chakra-ui/react';
import ColorSelect from './ColorSelect';

const Theme = () => {
  return (
    <Flex direction='column' gap='2'>
      <Heading size='md'>Theme</Heading>
      <ColorSelect title={'Clock'} />
    </Flex>
  );
};

export default Theme;
