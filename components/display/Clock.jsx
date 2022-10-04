import React, { useState, useEffect } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

const Clock = () => {
  const [clockState, setClockState] = useState('');

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(
        date.toLocaleTimeString('en-gb', {
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    }, 1000);
  }, []);

  return (
    <Box fontSize='96' mb='-5' fontFamily='mono'>
      {!clockState ? <Spinner size='lg' mb='2.5' /> : clockState}
    </Box>
  );
};

export default Clock;
