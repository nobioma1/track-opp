import { ChakraProvider } from '@chakra-ui/react';
import 'typeface-lato';

import theme from './customTheme';

const ThemeProvider: React.FC = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
