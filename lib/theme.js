import { extendTheme } from '@chakra-ui/react';

const colors = {
  blue: {
    200: '#0FB7A0',
    300: '#0FB7A0',
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, colors });

export default theme;
