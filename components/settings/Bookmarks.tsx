import React, { useState } from 'react';
import {
  IconButton,
  Stack,
  Heading,
  Flex,
  FormControl,
  Input,
  UnorderedList,
  Tag,
  Tooltip,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons/';

const Bookmarks = ({
  bookmarksArray,
  setBookmarksArray,
  useIcon,
  setUseIcon,
}) => {
  const [linkEntry, setLinkEntry] = useState('');

  const generatedId = Math.floor(Math.random() * 10000);
  const linkPattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      addLink();
    }
  }

  // Add links

  function linkChange(event) {
    setLinkEntry(event.target.value);
  }

  function addLink() {
    if (!!linkPattern.test(linkEntry)) {
      setBookmarksArray((prev) => [
        ...prev,
        { url: linkEntry, id: generatedId },
      ]);
      setLinkEntry('');
    } else {
      return null;
    }
  }

  // Remove Links

  function removeLink(id) {
    setBookmarksArray(bookmarksArray.filter((link) => link.id !== id));
  }

  const linkList = bookmarksArray.map((link) => (
    <Tag
      key={link.id}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      py='1'
      pl='5'
    >
      {link.url}
      <IconButton
        size='sm'
        bg='transparent'
        aria-label='delete link'
        onClick={() => removeLink(link.id)}
      >
        <DeleteIcon />
      </IconButton>
    </Tag>
  ));

  return (
    <Flex direction='column' gap='2' align='center'>
      <Heading alignSelf='start' size='md' mb='2'>
        Bookmarks
      </Heading>
      <FormControl display='flex' gap='2'>
        <Input
          value={linkEntry}
          onChange={linkChange}
          onKeyDown={handleKeyDown}
          placeholder='Add Link'
        ></Input>
        <Tooltip
          label={useIcon ? 'Hide Icons' : 'Show Icons'}
          placement='top'
          hasArrow
        >
          <IconButton
            aria-label=''
            onClick={() => setUseIcon((current) => !current)}
          >
            {useIcon ? <ViewIcon /> : <ViewOffIcon />}
          </IconButton>
        </Tooltip>
        <IconButton aria-label='' onClick={addLink}>
          <AddIcon />
        </IconButton>
      </FormControl>
      <UnorderedList
        styleType='none'
        display='flex'
        flexDirection='column'
        gap={2}
        w='100%'
        m='0'
      >
        {linkList}
      </UnorderedList>
    </Flex>
  );
};

export default Bookmarks;
