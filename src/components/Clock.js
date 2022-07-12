import React, { useState } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';

const Clock = ({ clockFormat, clockColor }) => {
  const [clockState, setClockState] = useState('');

  const date = new Date();

  useEffect(() => {
    setInterval(
      (function displayTime() {
        setClockState(
          date.toLocaleTimeString(`${clockFormat}`, {
            hour: '2-digit',
            minute: '2-digit',
          })
        );
      })(),
      1000
    );
  });

  return (
    <Box fontSize="96" mb="-5" fontFamily="mono" color={clockColor}>
      {clockState === '' ? <Spinner size="lg" mb="2.5" /> : clockState}
    </Box>
  );
};

export default Clock;
