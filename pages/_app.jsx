import { ChakraProvider } from '@chakra-ui/react';
import { SettingsWrapper } from '../context/SettingsContext';
import theme from '../lib/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <SettingsWrapper>
        <Component {...pageProps} />
      </SettingsWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
