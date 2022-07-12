import React, { useState } from 'react';
import {
  Heading,
  Input,
  IconButton,
  FormControl,
  VStack,
  Tag,
  Box,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';

const GreetingSettings = ({ username, setUsername }) => {
  const [usernameEntry, setUsernameEntry] = useState('');

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      addUsername();
    }
  }

  function usernameChange(event) {
    setUsernameEntry(event.target.value);
  }

  function addUsername() {
    setUsername(usernameEntry);
    setUsernameEntry('');
  }
  return (
    <VStack spacing="2" alignItems="flex-start">
      <Heading size="md">Greeting</Heading>
      <FormControl display="flex" gap="2">
        <Input
          value={usernameEntry}
          placeholder="Enter name"
          onChange={usernameChange}
          onKeyDown={handleKeyDown}
          maxLength={10}
        ></Input>
        <IconButton onClick={addUsername}>
          <AddIcon />
        </IconButton>
      </FormControl>
      <Tag
        display={username === '' ? 'none' : 'flex'}
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        py="1"
      >
        <Box maxW="85%" overflowWrap="normal" overflow="hidden">
          {username}
        </Box>
        <IconButton onClick={() => setUsername('')} bg="transparent">
          <DeleteIcon />
        </IconButton>
      </Tag>
    </VStack>
  );
};

export default GreetingSettings;
