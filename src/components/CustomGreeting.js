import React from 'react';
import { Box } from '@chakra-ui/react';

const CustomGreeting = ({ greeting }) => {
  return (
    <Box maxWidth="350px" textAlign="center">
      {greeting}
    </Box>
  );
};

export default CustomGreeting;
