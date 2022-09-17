import React from 'react';
import Image from 'next/image';
import { Flex, Link, IconButton, Box } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const BookmarkInitial = ({ bookmark }) => {
  return (
    <Box>
      {
        Array.from(
          bookmark.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('.')[0]
        )[0]
      }
    </Box>
  );
};

const Bookmarks = ({ bookmarksArray, useIcon }) => {
  const bookmarksDisplay = bookmarksArray.map((bookmark) => (
    <a
      key={bookmark.id}
      href={
        bookmark.url.includes('http://' || 'https://')
          ? bookmark.url
          : `https://www.${bookmark.url}`
      }
      style={{ margin: '0' }}
    >
      <IconButton
        aria-label=''
        variant='outline'
        size='lg'
        borderWidth='2px'
        key={bookmark.id}
      >
        {useIcon ? (
          <BookmarkInitial bookmark={bookmark} />
        ) : (
          <BookmarkInitial bookmark={bookmark} />
        )}
      </IconButton>
    </a>
  ));

  return (
    <Flex gap='2' wrap='wrap' maxW='250px' justify='center'>
      {bookmarksDisplay}
    </Flex>
  );
};

export default Bookmarks;
