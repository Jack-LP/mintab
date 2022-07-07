import React from 'react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Duckduckgo, Google } from '@icons-pack/react-simple-icons';

const SearchBar = ({ engine, searchColor }) => {
  return (
    <form action={engine} target="_self">
      <InputGroup>
        <InputRightElement
          children={
            engine === 'http://google.com/search' ? (
              <Google color="#ffffff30" size={28} />
            ) : (
              <Duckduckgo color="#ffffff30" size={28} />
            )
          }
          pointerEvents=""
          mt="1"
          mr="1"
        />
        <Input
          placeholder="Search"
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
