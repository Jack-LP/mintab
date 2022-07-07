import React from 'react';
import { IconButton, Fade } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';

const SettingsBtn = ({ handleClick, isOpen }) => {
  return (
    <Fade in={!isOpen}>
      <IconButton
        variant="outline"
        position="absolute"
        size="sm"
        top="4"
        right="4"
        onClick={handleClick}
        display={isOpen ? 'none' : 'flex'}
      >
        <SettingsIcon />
      </IconButton>
    </Fade>
  );
};

export default SettingsBtn;
