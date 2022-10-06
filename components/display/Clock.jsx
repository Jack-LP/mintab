import React, { useState, useEffect, useContext } from 'react';
import SettingsContext from '../../context/SettingsContext';
import { Box, Spinner } from '@chakra-ui/react';

const Clock = () => {
  const { clockFormat, useSeconds, clockColor } = useContext(SettingsContext);
  const [clockState, setClockState] = useState(null);
  const [clockDisplay, setClockDisplay] = useState(null);

  useEffect(() => {
    updateTime();
    setClockDisplay(
      <Box fontSize='96' mb='-5' fontFamily='mono' color={clockColor}>
        {!clockState ? (
          <Spinner size='lg' mb='2.5' color='whiteAlpha.500' />
        ) : (
          clockState
        )}
      </Box>
    );
  }, [clockColor, clockState]);

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

  return <>{clockDisplay}</>;
};

export default Clock;
