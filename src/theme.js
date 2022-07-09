import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    mono: `'Overpass Mono', monospace`,
    body: `Inter, sans-serif`,
  },
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
