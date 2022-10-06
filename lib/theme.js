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

const fonts = {
  heading: `'Nunito', sans-serif`,
  body: `'Nunito', sans-serif`,
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, colors, fonts });

export default theme;
