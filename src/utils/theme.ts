import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const colors = {
  primary: {
    100: '#E5FCF1',
    200: '#27EF96',
    300: '#10DE82',
    400: '#0EBE6F',
    500: '#0CA25F',
    600: '#0A864F',
    700: '#086F42',
    800: '#075C37',
    900: '#064C2E',
  },
};

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  colors,
  fonts: {
    body: 'Roboto Slab',
  },
  styles: {
    global: {
      body: {
        backgroundImage: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        bg: 'gray.700',
        color: 'white',
      },
    },
  },
  config,
});

export default customTheme;
