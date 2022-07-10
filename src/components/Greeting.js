import React from 'react';
import { Box } from '@chakra-ui/react';

const Greeting = ({ username }) => {
  const calcTime = () => {
    const date = new Date();
    const time = date.getHours();
    let greeting = 'Good evening';
    if (time < 12 && time > 3) {
      greeting = 'Good morning';
    }
    if (time < 19 && time >= 12) {
      greeting = 'Good afternoon';
    }
    return greeting;
  };

  return (
    <Box maxWidth="400px" textAlign="center" color="whiteAlpha.700">
      {username === '' ? null : `${calcTime()}, ${username}`}
    </Box>
  );
};

export default Greeting;
