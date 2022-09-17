import React from 'react';
import { Input } from '@chakra-ui/input';

const SearchBar = () => {
  return (
    <form action={'http://google.com/search'} target='_self'>
      <Input
        placeholder='Search'
        size='lg'
        variant='flushed'
        name='q'
        autoComplete='off'
      />
    </form>
  );
};

export default SearchBar;
