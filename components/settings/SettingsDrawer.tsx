import React from 'react';
import Image from 'next/image';
import { Drawer, DrawerContent, DrawerBody, Flex } from '@chakra-ui/react';
import mintabLogo from '../../public/mintab-logo.svg';
import Bookmarks from './Bookmarks';

const SettingsDrawer = ({
  isOpen,
  onClose,
  bookmarksArray,
  setBookmarksArray,
  useIcon,
  setUseIcon,
}) => {
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerContent>
        <Flex
          w='100%'
          align='center'
          justify='center'
          borderBottomWidth='1px'
          p='5'
        >
          <Image src={mintabLogo} alt='mintab' width='150px' height='30px' />
        </Flex>
        <DrawerBody>
          <Bookmarks
            bookmarksArray={bookmarksArray}
            setBookmarksArray={setBookmarksArray}
            useIcon={useIcon}
            setUseIcon={setUseIcon}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SettingsDrawer;
