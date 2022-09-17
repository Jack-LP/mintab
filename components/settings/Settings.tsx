import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import SettingsBtn from './SettingsBtn';
import SettingsDrawer from './SettingsDrawer';

const Settings = ({
  bookmarksArray,
  setBookmarksArray,
  useIcon,
  setUseIcon,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SettingsBtn handleClick={onOpen} isOpen={isOpen} />
      <SettingsDrawer
        isOpen={isOpen}
        onClose={onClose}
        bookmarksArray={bookmarksArray}
        setBookmarksArray={setBookmarksArray}
        useIcon={useIcon}
        setUseIcon={setUseIcon}
      />
    </>
  );
};

export default Settings;
