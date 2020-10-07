import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
  },
  fonts: {
    ...theme.fonts,
    body: 'Fira Sans, sans-serif',
    heading: 'Fira Sans, sans-serif',
  },
};

export default customTheme;
