import React, { useState, useEffect, useContext } from 'react';
import SettingsContext from '../../context/SettingsContext';
import { Box, Spinner } from '@chakra-ui/react';

const Clock = () => {
  const { clockFormat, useSeconds, clockColor, useAMPM } =
    useContext(SettingsContext);
  const [clockState, setClockState] = useState(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    updateTime();
  }, [clockColor, clockState]);

  const updateTime = () => {
    let time;

    useAMPM === 'AMPMOff'
      ? (time = new Date()
          .toLocaleTimeString(
            `${clockFormat}`,
            useSeconds === 'secondsOn'
              ? { hour: '2-digit', minute: '2-digit', second: '2-digit' }
              : { hour: '2-digit', minute: '2-digit' }
          )
          .replace('AM', '')
          .replace('PM', ''))
      : (time = new Date().toLocaleTimeString(
          `${clockFormat}`,
          useSeconds === 'secondsOn'
            ? { hour: '2-digit', minute: '2-digit', second: '2-digit' }
            : { hour: '2-digit', minute: '2-digit' }
        ));
    setClockState(time);
  };

  setInterval(updateTime, 1000);

  return hydrated ? (
    <>
      <Box fontSize='96' mb='-5' fontFamily='body' color={clockColor}>
        {!clockState ? (
          <Spinner size='lg' mb='2.5' color='whiteAlpha.500' />
        ) : (
          clockState
        )}
      </Box>
    </>
  ) : null;
};

export default Clock;
