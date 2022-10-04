import React, { useContext } from 'react';
import { Image } from '@chakra-ui/react';
import SettingsContext from '../../context/SettingsContext';

const Background = () => {
  const { background } = useContext(SettingsContext);

  return (
    <Image
      src={background}
      alt=''
      position='absolute'
      zIndex='-1'
      objectFit='cover'
      w='100vw'
      h='100vh'
    />
  );
};

export default Background;
