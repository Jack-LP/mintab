import React, { useContext } from 'react';
import SettingsContext from '../../context/SettingsContext';
import { Flex, Heading } from '@chakra-ui/react';
import ColorSelect from './ColorSelect';

const Theme = () => {
  const {
    username,
    clockColor,
    setClockColor,
    greetingColor,
    setGreetingColor,
  } = useContext(SettingsContext);

  return (
    <Flex direction='column' gap='2'>
      <Heading size='md'>Theme</Heading>
      <ColorSelect
        title={'Clock'}
        color={clockColor}
        setColor={setClockColor}
      />
      {username ? (
        <ColorSelect
          title={'Greeting'}
          color={greetingColor}
          setColor={setGreetingColor}
        />
      ) : null}
    </Flex>
  );
};

export default Theme;
