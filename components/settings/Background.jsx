import React, { useContext, useState } from 'react';
import SettingsContext from '../../context/SettingsContext';
import {
  Flex,
  Heading,
  Tag,
  Image,
  FormControl,
  Input,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon, DownloadIcon } from '@chakra-ui/icons';
import CustomSlider from './CustomSlider';

const imgPattern = new RegExp(
  /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/
);

const Background = () => {
  const [backgroundEntry, setBackgroundEntry] = useState('');
  const {
    background,
    setBackground,
    brightness,
    setBrightness,
    blur,
    setBlur,
  } = useContext(SettingsContext);
  const toast = useToast();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addBackground();
    }
  };

  const backgroundChange = (e) => {
    setBackgroundEntry(e.target.value);
  };

  const addBackground = () => {
    if (!!imgPattern.test(backgroundEntry)) {
      setBackground(backgroundEntry);
      setBackgroundEntry('');
      toast({
        position: 'bottom-left',
        title: 'Background changed',
        status: 'info',
        variant: 'left-accent',
        duration: 1000,
        isClosable: false,
      });
    } else {
      return null;
    }
  };

  return (
    <Flex direction='column' gap='2'>
      <Heading size='md'>Background</Heading>
      <FormControl display='flex' gap='2'>
        <Input
          value={backgroundEntry}
          placeholder='Link to image'
          onChange={backgroundChange}
          onKeyDown={handleKeyDown}
        />
        <IconButton icon={<AddIcon />} onClick={addBackground} />
      </FormControl>
      <Tag
        display={background === '' ? 'none' : 'flex'}
        flexDirection='column'
        w='100%'
        alignItems='center'
        p='2'
        gap='2'
      >
        <Flex alignItems='center'>
          <Image
            src={background}
            alt='Background preview'
            borderRadius='12px'
            w='250px'
            height='145px'
            objectFit='cover'
          />
        </Flex>
        <Flex gap='2' w='100%'>
          <IconButton
            variant='outline'
            bg='transparent'
            onClick={() => setBackground('')}
            icon={<DownloadIcon />}
            w='100%'
          />
          <IconButton
            variant='outline'
            bg='transparent'
            onClick={() => setBackground('')}
            icon={<DeleteIcon />}
            w='100%'
          />
        </Flex>
      </Tag>
      <Flex direction='column' gap='2'>
        <CustomSlider
          background={background}
          value={brightness}
          setValue={setBrightness}
          heading={'Brightness'}
        />
        <CustomSlider
          background={background}
          value={blur}
          setValue={setBlur}
          heading={'Blur'}
        />
      </Flex>
    </Flex>
  );
};

export default Background;
