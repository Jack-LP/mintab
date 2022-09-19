import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Flex, Link, IconButton, Box } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const BookmarkInitial = ({ bookmark }) => {
  return (
    <Box>
      {Array.from(
        bookmark.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('.')[0]
      )[0].toUpperCase()}
    </Box>
  );
};

const Bookmarks = ({ bookmarksArray, useIcon }) => {
  const [bookmarksDisplay, setBookmarksDisplay] = useState([]);

  useEffect(() => {
    setBookmarksDisplay(
      bookmarksArray.map((bookmark) => (
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
              <Image
                src={`https://icon.horse/icon/${bookmark.url}`}
                width='24px'
                height='24px'
                alt={Array.from(
                  bookmark.url
                    .replace(/^(?:https?:\/\/)?(?:www\.)?/i, '')
                    .split('.')[0]
                )[0].toUpperCase()}
              />
            ) : (
              <BookmarkInitial bookmark={bookmark} />
            )}
          </IconButton>
        </a>
      ))
    );
  }, [bookmarksArray, useIcon]);

  return (
    <Flex gap='2' wrap='wrap' maxW='250px' justify='center'>
      {bookmarksDisplay}
    </Flex>
  );
};

export default Bookmarks;
