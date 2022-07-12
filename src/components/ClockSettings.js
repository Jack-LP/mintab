import React from 'react';
import { Stack, Heading, RadioGroup, Radio } from '@chakra-ui/react';
import ColorSelect from './ColorSelect';

const ClockSettings = ({
  clockFormat,
  setClockFormat,
  clockColor,
  setClockColor,
}) => {
  return (
    <Stack spacing="2">
      <Heading size="md">Clock</Heading>
      <RadioGroup display="flex" gap="4" defaultValue={clockFormat}>
        <Radio
          value="en-GB"
          onChange={() => {
            setClockFormat('en-GB');
          }}
        >
          24 Hour
        </Radio>
        <Radio
          value="en-US"
          onChange={() => {
            setClockFormat('en-US');
          }}
        >
          12 Hour
        </Radio>
      </RadioGroup>
      <ColorSelect
        color={clockColor}
        setColor={setClockColor}
        title={'Clock Color'}
      />
    </Stack>
  );
};

export default ClockSettings;
