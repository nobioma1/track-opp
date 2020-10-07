import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@chakra-ui/core';

import ThemeProvider from '../theme';
import AppRoute from '../../routes/AppRoute';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Box height="100%" background="#f5f6fa" paddingTop="54px">
          <AppRoute />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
