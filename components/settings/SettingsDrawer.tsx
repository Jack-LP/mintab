import React from 'react';
import Image from 'next/image';
import { Drawer, DrawerContent, DrawerBody, Flex } from '@chakra-ui/react';
import mintabLogo from '../../public/mintab-logo.svg';

type Props = { isOpen; onClose };

const SettingsDrawer = ({ isOpen, onClose }: Props) => {
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
        <DrawerBody>segseg</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SettingsDrawer;
