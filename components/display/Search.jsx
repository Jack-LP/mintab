import React from 'react';
import { Input, InputGroup } from '@chakra-ui/react';

const Search = () => {
  return (
    <form action='http://google.com/search' target='_self'>
      <Input
        minW='270px'
        variant='flushed'
        placeholder='Search'
        name='q'
        autoComplete='off'
        size='lg'
      />
    </form>
  );
};

export default Search;
