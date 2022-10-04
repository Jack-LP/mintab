import React, { useContext } from 'react';
import SettingsContext from '../../context/SettingsContext';
import {
  Flex,
  Heading,
  RadioGroup,
  Radio,
  Switch,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

const Clock = () => {
  const { clockFormat, setClockFormat, useSeconds, setUseSeconds } =
    useContext(SettingsContext);

  return (
    <Flex direction='column' gap='2'>
      <Heading size='md'>Clock</Heading>
      <FormControl display='flex' alignItems='center'>
        <FormLabel htmlFor='useSeconds'>Use seconds</FormLabel>
        <Switch
          id='useSeconds'
          isChecked={useSeconds === 'secondsOn' ? true : false}
          onChange={() => {
            useSeconds === 'secondsOn'
              ? setUseSeconds('secondsOff')
              : setUseSeconds('secondsOn');
          }}
        />
      </FormControl>
      <RadioGroup display='flex' gap='4' defaultValue={clockFormat}>
        <Radio
          value='en-GB'
          onChange={() => {
            setClockFormat('en-GB');
          }}
        >
          24 Hour
        </Radio>
        <Radio
          value='en-US'
          onChange={() => {
            setClockFormat('en-US');
          }}
        >
          12 Hour
        </Radio>
      </RadioGroup>
    </Flex>
  );
};

export default Clock;
