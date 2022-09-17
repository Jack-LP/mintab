import React from 'react';
import { IconButton, Fade } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';

type Props = { handleClick; isOpen };

const SettingsBtn = ({ handleClick, isOpen }: Props) => {
  return (
    <IconButton
      variant='outline'
      aria-label=''
      position='absolute'
      size='sm'
      top='4'
      right='4'
      onClick={handleClick}
      display={isOpen ? 'none' : 'flex'}
      icon={<SettingsIcon />}
    />
  );
};

export default SettingsBtn;
