import React, { useContext, useEffect, useState } from 'react';
import { Image, Box } from '@chakra-ui/react';
import SettingsContext from '../../context/SettingsContext';

const Background = () => {
  const [backgroundDisplay, setBackgroundDisplay] = useState();
  const { background, brightness, blur } = useContext(SettingsContext);

  useEffect(() => {
    setBackgroundDisplay(
      <Image
        src={background}
        alt=''
        objectFit='cover'
        w='100%'
        h='100%'
        filter={`brightness(${brightness}) blur(${blur * 10}px)`}
      />
    );
  }, [background, brightness, blur]);

  return (
    <Box w='100vw' h='100vh' position='absolute' zIndex='-1'>
      {backgroundDisplay}
    </Box>
  );
};

export default Background;
