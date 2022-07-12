import React, { useRef } from 'react';
import {
  Stack,
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

const DefaultSettings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const resetSettings = () => {
    onClose();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Stack spacing="2">
      <Heading size="md">Defaults</Heading>
      <Button onClick={onOpen}>Reset Settings</Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Reset Settings
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to return to default settings?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={resetSettings} ml={3}>
                Reset
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Stack>
  );
};

export default DefaultSettings;
