import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Routes from './routes';
import customTheme from './utils/theme';
import '@fontsource/roboto-slab';

const App: React.FC = () => (
  <Router>
    <ChakraProvider theme={customTheme}>
      <Routes />
    </ChakraProvider>
  </Router>
);

export default App;
