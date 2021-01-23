import { BrowserRouter as Router } from 'react-router-dom';

import ThemeProvider from '../Theme';
import AppRoute from '../../routes';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppRoute />
      </Router>
    </ThemeProvider>
  );
};

export default App;
