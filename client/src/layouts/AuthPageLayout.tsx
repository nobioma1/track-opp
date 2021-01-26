import { Grid, Box } from '@chakra-ui/react';

import Logo from 'components/Logo';

const AuthPageLayout: React.FC = ({ children }) => {
  return (
    <Grid
      height="100vh"
      gridTemplateColumns={{ md: 'repeat(2, 50%)' }}
      overflow="hidden"
    >
      <Box
        paddingX={5}
        paddingTop={5}
        paddingBottom={12}
        height="100vh"
        overflowY="scroll"
        backgroundColor="gray.50"
      >
        <Box width={{ lg: '28rem' }} margin={{ lg: '0 auto' }}>
          <Box
            backgroundColor="gray.50"
            position={{ base: 'fixed', md: 'relative' }}
            width={{ base: '100%', md: 'initial' }}
          >
            <Logo to="/" marginBottom={{ md: 12 }} />
          </Box>
          <Box paddingTop={{ base: 14, md: 'initial' }}>{children}</Box>
        </Box>
      </Box>
      <Box
        height="100%"
        backgroundColor="purple.600"
        display={{ base: 'none', md: 'block' }}
      ></Box>
    </Grid>
  );
};

export default AuthPageLayout;
