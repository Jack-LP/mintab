import React, { useContext } from 'react';
import SettingsContext from '../../context/SettingsContext';
import { Flex, Heading, RadioGroup, Radio } from '@chakra-ui/react';

const Search = () => {
  const { engine, setEngine } = useContext(SettingsContext);

  return (
    <Flex direction='column' gap='2'>
      <Heading size='md'>Search</Heading>
      <RadioGroup display='flex' gap='4' defaultValue={engine}>
        <Radio
          value='http://google.com/search'
          onChange={() => {
            setEngine('http://google.com/search');
          }}
        >
          Google
        </Radio>
        <Radio
          value='https://duckduckgo.com/?q='
          onChange={() => {
            setEngine('https://duckduckgo.com/?q=');
          }}
        >
          DuckDuckGo
        </Radio>
      </RadioGroup>
    </Flex>
  );
};

export default Search;
