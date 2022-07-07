import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    mono: `'Space Mono', monospace`,
    body: `Inter, sans-serif`,
  },
  initialColorMode: 'dark',
  useSystemColorMode: false,
});

export default theme;
