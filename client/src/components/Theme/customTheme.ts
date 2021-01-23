import { extendTheme } from '@chakra-ui/react';

const fonts = {
  heading: 'Lato, sans-serif',
};

export default extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Lato, sans-serif',
      },
    },
  },
  fonts,
});
