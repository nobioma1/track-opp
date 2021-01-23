import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import ThemeProvider from '../Theme';
import AppRoute from '../../routes';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Box minWidth="320px">
          <AppRoute />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
