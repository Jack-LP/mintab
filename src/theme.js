import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    blue: {
      200: '#0FB7A0',
      300: '#0FB7A0',
    },
  },
  initialColorMode: 'dark',
  useSystemColorMode: false,
});

export default theme;
