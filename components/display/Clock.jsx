import React, { useState, useEffect, useContext } from 'react';
import SettingsContext from '../../context/SettingsContext';
import { Box, Spinner } from '@chakra-ui/react';

const Clock = () => {
  const { clockFormat, useSeconds } = useContext(SettingsContext);
  const [clockState, setClockState] = useState(null);

  useEffect(() => {
    updateTime();
  }, []);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString(
      `${clockFormat}`,
      useSeconds === 'secondsOn'
        ? { hour: '2-digit', minute: '2-digit', second: '2-digit' }
        : { hour: '2-digit', minute: '2-digit' }
    );
    setClockState(time);
  };

  setTimeout(updateTime, 1000);

  return (
    <Box fontSize='96' mb='-5' fontFamily='mono'>
      {!clockState ? <Spinner size='lg' mb='2.5' /> : clockState}
    </Box>
  );
};

export default Clock;
