import React, { useState, useContext } from 'react';
import SettingsContext from '../../context/SettingsContext';
import {
  Heading,
  Input,
  IconButton,
  FormControl,
  Tag,
  Box,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons';

const Greeting = () => {
  const [usernameEntry, setUsernameEntry] = useState('');
  const { username, setUsername } = useContext(SettingsContext);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addUsername();
    }
  };

  const usernameChange = (e) => {
    setUsernameEntry(e.target.value);
  };

  const addUsername = () => {
    setUsername(usernameEntry);
    setUsernameEntry('');
  };

  return (
    <Flex direction='column' gap='2'>
      <Heading size='md'>Greeting</Heading>
      <FormControl display='flex' gap='2'>
        <Input
          value={usernameEntry}
          placeholder='Enter name'
          onChange={usernameChange}
          onKeyDown={handleKeyDown}
          maxLength={10}
        ></Input>
        <IconButton onClick={addUsername} icon={<CheckIcon />} />
      </FormControl>
      <Tag
        display={username === '' ? 'none' : 'flex'}
        alignItems='center'
        justifyContent='space-between'
        w='100%'
        py='1'
        pl='5'
      >
        <Box maxW='85%' overflowWrap='normal' overflow='hidden'>
          {username}
        </Box>
        <IconButton
          onClick={() => setUsername('')}
          bg='transparent'
          icon={<DeleteIcon />}
          size='sm'
        />
      </Tag>
    </Flex>
  );
};

export default Greeting;
