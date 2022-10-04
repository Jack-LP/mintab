import React, { useContext, useEffect, useState } from 'react';
import SettingsContext from '../../context/SettingsContext';
import { Text } from '@chakra-ui/react';

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

const Greeting = () => {
  const [usernameDisplay, setUsernameDisplay] = useState();
  const { username } = useContext(SettingsContext);

  useEffect(() => {
    setUsernameDisplay(username);
  }, [username]);

  return (
    <Text
      maxW='400px'
      textAlign='center'
      color='whiteAlpha.700'
      fontSize='24px'
    >
      {!usernameDisplay ? null : `${calcTime()}, ${usernameDisplay}`}
    </Text>
  );
};

export default Greeting;
