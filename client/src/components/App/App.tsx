import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Box } from '@chakra-ui/react';

import ThemeProvider from 'components/Theme';
import AppRoute from 'routes';
import { FirebaseContextProvider } from 'contexts/FirebaseContext';
import { AuthContextProvider } from 'contexts/AuthContext';
import config from 'config';

const App = () => {
  ReactGA.initialize(config.googleAnalytics || '');
  ReactGA.pageview(window.location.pathname + window.location.search);

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
