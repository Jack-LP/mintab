import React, { useEffect, useState } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

const Clock = () => {
  const [clockState, setClockState] = useState('');

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString('en-GB').slice(0, -3));
    }, 1000);
  }, []);

  return (
    <Box fontSize="96" fontFamily="mono" mb="-5">
      {clockState === '' ? <Spinner size="lg" mb="2.5" /> : clockState}
    </Box>
  );
};

export default Clock;
