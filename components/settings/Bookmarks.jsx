import React, { useContext, useState } from 'react';
import {
  Flex,
  Heading,
  FormControl,
  Input,
  IconButton,
  UnorderedList,
  Tag,
  Tooltip,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import SettingsContext from '../../context/SettingsContext';

const bookmarkPattern = new RegExp(
  '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$',
  'i'
);

const Bookmarks = () => {
  const generatedId = Math.floor(Math.random() * 1000);
  const [bookmarkEntry, setBookmarkEntry] = useState('');

  const { bookmarks, setBookmarks, useIcon, setUseIcon } =
    useContext(SettingsContext);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addBookmark();
    }
  };

  const bookmarkChange = (e) => {
    setBookmarkEntry(e.target.value);
  };

  const addBookmark = () => {
    if (!!bookmarkPattern.test(bookmarkEntry) && bookmarks.length < 20) {
      setBookmarks((prev) => [
        ...prev,
        { url: bookmarkEntry, id: generatedId },
      ]);
      setBookmarkEntry('');
    } else {
      return null;
    }
  };

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  };

  const bookmarksList = bookmarks.map((bookmark) => (
    <Tag
      key={bookmark.id}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      py='1'
      pl='5'
    >
      {bookmark.url}
      <IconButton
        size='sm'
        bg='transparent'
        aria-label='delete link'
        icon={<DeleteIcon />}
        onClick={() => removeBookmark(bookmark.id)}
      />
    </Tag>
  ));

  return (
    <Flex direction='column' gap='2'>
      <Heading size='md'>Bookmarks</Heading>
      <FormControl display='flex' gap='2'>
        <Input
          value={bookmarkEntry}
          onChange={bookmarkChange}
          onKeyDown={handleKeyDown}
          placeholder='Add Link'
          focusBorderColor='mint.200'
        />
        <IconButton onClick={addBookmark}>
          <AddIcon />
        </IconButton>
        <Tooltip
          label={useIcon === 'iconOn' ? 'Hide Icons' : 'Show Icons'}
          placement='top'
          hasArrow
        >
          <IconButton
            onClick={() => {
              useIcon === 'iconOn'
                ? setUseIcon('iconOff')
                : setUseIcon('iconOn');
            }}
          >
            {useIcon === 'iconOn' ? <ViewIcon /> : <ViewOffIcon />}
          </IconButton>
        </Tooltip>
      </FormControl>
      <Flex gap='2' direction='column'>
        {bookmarksList}
      </Flex>
    </Flex>
  );
};

export default Bookmarks;
