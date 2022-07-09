import React, { useState } from 'react';
import {
  Stack,
  Heading,
  FormControl,
  Input,
  IconButton,
  UnorderedList,
  Tag,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons/';

const AddLinks = ({ linksArray, setLinksArray }) => {
  const generatedId = Math.floor(Math.random() * 1000);
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

  // Add Links

  const [linkEntry, setLinkEntry] = useState('');

  function linkChange(event) {
    setLinkEntry(event.target.value);
  }

  function addLink() {
    if (!!linkPattern.test(linkEntry)) {
      setLinksArray(prev => [...prev, { url: linkEntry, id: generatedId }]);
      setLinkEntry('');
    } else {
      return null;
    }
  }

  // Remove Links

  function removeLink(id) {
    setLinksArray(linksArray.filter(link => link.id !== id));
  }

  const linkList = linksArray.map(link => (
    <Tag
      key={link.id}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      py="1"
    >
      {link.url}
      <IconButton
        size="sm"
        bg="transparent"
        aria-label="delete link"
        onClick={() => removeLink(link.id)}
      >
        <DeleteIcon />
      </IconButton>
    </Tag>
  ));

  return (
    <Stack spacing="2">
      <Heading size="md">Links</Heading>
      <FormControl display="flex" gap="4">
        <Input
          value={linkEntry}
          onChange={linkChange}
          onKeyDown={handleKeyDown}
          placeholder="Add Link"
        ></Input>
        <IconButton onClick={addLink}>
          <AddIcon />
        </IconButton>
      </FormControl>
      <UnorderedList
        styleType="none"
        display="flex"
        flexDirection="column"
        gap={2}
        w="100%"
      >
        {linkList}
      </UnorderedList>
    </Stack>
  );
};

export default AddLinks;
