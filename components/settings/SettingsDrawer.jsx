import React, { useRef } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  Input,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import Bookmarks from './Bookmarks';
import Background from './Background';

const SettingsDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      {isOpen ? null : (
        <IconButton
          icon={<SettingsIcon />}
          ref={btnRef}
          onClick={onOpen}
          position='absolute'
          top='4'
          right='4'
          size='sm'
          variant='outline'
        />
      )}
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg='#00000030' backdropFilter='blur(8px)'>
          <DrawerHeader
            display='flex'
            justifyContent='center'
            alignItems='center'
            borderBottomWidth='1px'
            padding='6'
          >
            <Image src='/img/mintab-logo.svg' alt='mintab' w='140px' />
          </DrawerHeader>
          <DrawerBody display='flex' flexDirection='column' gap='8' py='4'>
            <Bookmarks />
            <Background />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SettingsDrawer;
