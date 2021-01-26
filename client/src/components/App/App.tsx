import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import ThemeProvider from 'components/Theme';
import AppRoute from 'routes';
import { FirebaseContextProvider } from 'contexts/FirebaseContext';
import { AuthContextProvider } from 'contexts/AuthContext';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <FirebaseContextProvider>
          <AuthContextProvider>
            <Box minWidth="320px">
              <AppRoute />
            </Box>
          </AuthContextProvider>
        </FirebaseContextProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
