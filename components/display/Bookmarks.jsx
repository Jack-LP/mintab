import React, { useContext, useEffect, useState } from 'react';
import SettingsContext from '../../context/SettingsContext';
import { Flex, IconButton, Link, Image, Box } from '@chakra-ui/react';

const BookmarkInitial = ({ bookmark }) => {
  return (
    <Box>
      {Array.from(
        bookmark.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('.')[0]
      )[0].toUpperCase()}
    </Box>
  );
};

const Bookmarks = () => {
  const [bookmarkDisplay, setBookmarkDisplay] = useState([]);
  const { bookmarks, useIcon } = useContext(SettingsContext);

  useEffect(() => {
    setBookmarkDisplay(
      bookmarks.map((bookmark) => (
        <Link
          key={bookmark.id}
          href={
            bookmark.url.includes('http://' || 'https://')
              ? bookmark.url
              : `https://www.${bookmark.url}`
          }
        >
          <IconButton variant='outline' size='lg' borderWidth='2px'>
            {useIcon === 'iconOn' ? (
              <Image
                src={`https://icon.horse/icon/${bookmark.url}`}
                boxSize='70%'
                borderRadius='10px'
                alt='4'
              />
            ) : (
              <BookmarkInitial bookmark={bookmark} />
            )}
          </IconButton>
        </Link>
      ))
    );
  }, [bookmarks, useIcon]);

  return <Flex>{bookmarkDisplay}</Flex>;
};

export default Bookmarks;
