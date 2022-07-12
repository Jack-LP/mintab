import React from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { Duckduckgo, Google } from '@icons-pack/react-simple-icons';

const SearchBar = ({ engine, setEngine, searchColor }) => {
  return (
    <form action={engine} target="_self">
      <InputGroup>
        <InputRightElement
          children={
            <IconButton
              children={
                engine === 'http://google.com/search' ? (
                  <Google color={`${searchColor}50`} size={28} />
                ) : (
                  <Duckduckgo color={`${searchColor}50`} size={28} />
                )
              }
              onClick={() =>
                setEngine(
                  engine === 'http://google.com/search'
                    ? 'https://duckduckgo.com/?q='
                    : 'http://google.com/search'
                )
              }
              variant="unstyled"
            ></IconButton>
          }
          mt="1"
          mr="-3"
        />
        <Input
          placeholder="Search"
          _placeholder={{ color: `${searchColor}` }}
          size="lg"
          variant="flushed"
          name="q"
          autoComplete="off"
          focusBorderColor={searchColor}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchBar;
