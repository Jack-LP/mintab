import React from 'react';
import { Flex, Link, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Bookmarks = () => {
  return (
    <Flex gap='2' wrap='wrap' maxW='250px' justify='center'>
      <Link>
        <IconButton
          aria-label=''
          variant='outline'
          size='lg'
          borderWidth='2px'
          icon={<SearchIcon />}
        />
      </Link>
    </Flex>
  );
};

export default Bookmarks;
