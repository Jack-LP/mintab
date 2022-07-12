import React from 'react';
import { Stack, Heading, RadioGroup, Radio } from '@chakra-ui/react';
import ColorSelect from './ColorSelect';

const SearchBarSettings = ({
  engine,
  setEngine,
  searchColor,
  setSearchColor,
}) => {
  return (
    <Stack spacing="2">
      <Heading size="md">Search</Heading>
      <RadioGroup display="flex" gap="4" defaultValue={engine}>
        <Radio
          value="http://google.com/search"
          onChange={() => {
            setEngine('http://google.com/search');
          }}
        >
          Google
        </Radio>
        <Radio
          value="https://duckduckgo.com/?q="
          onChange={() => {
            setEngine('https://duckduckgo.com/?q=');
          }}
        >
          DuckDuckGo
        </Radio>
      </RadioGroup>
      <ColorSelect
        color={searchColor}
        setColor={setSearchColor}
        title="Search Bar Color"
      />
    </Stack>
  );
};

export default SearchBarSettings;
