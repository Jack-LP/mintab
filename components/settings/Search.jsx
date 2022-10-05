import React, { useContext } from 'react';
import SettingsContext from '../../context/SettingsContext';
import {
  Flex,
  Heading,
  RadioGroup,
  Radio,
  FormControl,
  Tag,
  FormLabel,
  Switch,
} from '@chakra-ui/react';

const Search = () => {
  const { engine, setEngine, autofocus, setAutofocus } =
    useContext(SettingsContext);

  return (
    <Flex direction='column' gap='2'>
      <Heading size='md'>Search</Heading>
      <RadioGroup
        display='flex'
        gap='4'
        defaultValue={engine}
        colorScheme='mint'
      >
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
      <FormControl>
        <Tag
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          py='3'
          px='5'
        >
          <FormLabel htmlFor='autofocus' m='0'>
            Autofocus
          </FormLabel>
          <Switch
            colorScheme='mint'
            id='autofocus'
            isChecked={autofocus === 'autofocusOn' ? true : false}
            onChange={() => {
              autofocus === 'autofocusOn'
                ? setAutofocus('autofocusOff')
                : setAutofocus('autofocusOn');
            }}
          />
        </Tag>
      </FormControl>
    </Flex>
  );
};

export default Search;
