import { extendTheme } from '@chakra-ui/react';

const colors = {
  mint: {
    200: '#0FB7A0',
    300: '#0FB7A0',
  },
  glass: {
    100: '#e2e8f029',
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, colors });

export default theme;
