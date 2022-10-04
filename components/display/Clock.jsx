import React, { useState, useEffect, useContext } from 'react';
import SettingsContext from '../../context/SettingsContext';
import { Box, Spinner } from '@chakra-ui/react';

const Clock = () => {
  const { clockFormat, useSeconds } = useContext(SettingsContext);

  const [clockState, setClockState] = useState('');

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(
        date.toLocaleTimeString(
          `${clockFormat}`,
          useSeconds === 'secondsOn'
            ? {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              }
            : {
                hour: '2-digit',
                minute: '2-digit',
              }
        )
      );
    }, 1000);
  }, [clockFormat, useSeconds]);

  return (
    <Box fontSize='96' mb='-5' fontFamily='mono'>
      {!clockState ? <Spinner size='lg' mb='2.5' /> : clockState}
    </Box>
  );
};

export default Clock;
