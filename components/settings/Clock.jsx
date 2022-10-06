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
  Tag,
} from '@chakra-ui/react';

const Clock = () => {
  const {
    clockFormat,
    setClockFormat,
    useSeconds,
    setUseSeconds,
    useAMPM,
    setUseAMPM,
  } = useContext(SettingsContext);

  return (
    <Flex direction='column' gap='2'>
      <Heading size='md'>Clock</Heading>
      <RadioGroup
        display='flex'
        gap='4'
        defaultValue={clockFormat}
        colorScheme='mint'
      >
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
      <FormControl display='flex' flexDirection='column' gap='2'>
        <Tag
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          py='3'
          px='5'
        >
          <FormLabel htmlFor='useSeconds' m='0'>
            Use seconds
          </FormLabel>
          <Switch
            colorScheme='mint'
            id='useSeconds'
            isChecked={useSeconds === 'secondsOn' ? true : false}
            onChange={() => {
              useSeconds === 'secondsOn'
                ? setUseSeconds('secondsOff')
                : setUseSeconds('secondsOn');
            }}
          />
        </Tag>
        {clockFormat === 'en-US' ? (
          <Tag
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            py='3'
            px='5'
          >
            <FormLabel htmlFor='useAMPM' m='0'>
              Use AM / PM
            </FormLabel>
            <Switch
              colorScheme='mint'
              id='useAMPM'
              isChecked={useAMPM === 'AMPMOn' ? true : false}
              onChange={() => {
                useAMPM === 'AMPMOn'
                  ? setUseAMPM('AMPMOff')
                  : setUseAMPM('AMPMOn');
              }}
            />
          </Tag>
        ) : null}
      </FormControl>
    </Flex>
  );
};

export default Clock;
