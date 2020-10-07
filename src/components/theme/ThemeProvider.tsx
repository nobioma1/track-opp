import React from 'react';
import { ThemeProvider as Provider, CSSReset } from '@chakra-ui/core';

import customTheme from './customTheme';

const ThemeProvider: React.FunctionComponent = ({ children }) => {
  return (
    <Provider theme={customTheme}>
      <CSSReset />
      {children}
    </Provider>
  );
};

export default ThemeProvider;
