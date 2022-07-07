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

const SetCustomGreeting = ({ greeting, setGreeting }) => {
  const [greetingEntry, setGreetingEntry] = useState('');

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      addGreeting();
    }
  }

  function greetingChange(event) {
    setGreetingEntry(event.target.value);
  }

  function addGreeting() {
    setGreeting(greetingEntry);
    setGreetingEntry('');
  }

  function deleteGreeting() {
    setGreeting('');
  }

  return (
    <VStack spacing="2" alignItems="flex-start">
      <Heading size="md">Custom Greeting</Heading>
      <FormControl display="flex" gap="4">
        <Input
          value={greetingEntry}
          placeholder="Add Greeting"
          onChange={greetingChange}
          onKeyDown={handleKeyDown}
          maxLength={40}
        ></Input>
        <IconButton onClick={addGreeting}>
          <AddIcon />
        </IconButton>
      </FormControl>
      <Tag
        display={greeting === '' ? 'none' : 'flex'}
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        py="1"
      >
        <Box maxW="85%" overflowWrap="normal" overflow="hidden">
          {greeting}
        </Box>
        <IconButton onClick={deleteGreeting} bg="transparent">
          <DeleteIcon />
        </IconButton>
      </Tag>
    </VStack>
  );
};

export default SetCustomGreeting;
