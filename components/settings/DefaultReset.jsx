import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import {
  Flex,
  Heading,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from '@chakra-ui/react';

const DefaultReset = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const router = useRouter();

  const resetSettings = () => {
    onClose();
    localStorage.clear();
    router.reload(window.location.pathname);
  };

  return (
    <Flex direction='column' gap='2'>
      <Heading size='md'>Defaults</Heading>
      <Button onClick={onOpen}>Reset Settings</Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg='glass.100' backdropFilter={'blur(8px)'}>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Reset Settings
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to return to default settings?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme='mint'
                color='white'
                onClick={resetSettings}
                ml={3}
              >
                Reset
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  );
};

export default DefaultReset;
