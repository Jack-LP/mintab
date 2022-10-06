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
  const [greetingDisplay, setGreetingDisplay] = useState();
  const { username, greetingColor } = useContext(SettingsContext);

  useEffect(() => {
    setGreetingDisplay(
      <Text
        maxW='400px'
        textAlign='center'
        color={greetingColor}
        fontSize='26px'
      >
        {!username ? null : `${calcTime()}, ${username}`}
      </Text>
    );
  }, [username, greetingColor]);

  return <>{greetingDisplay}</>;
};

export default Greeting;
