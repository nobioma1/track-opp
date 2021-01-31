import { useEffect, useRef } from 'react';
import { Grid, Box, Text, Stack } from '@chakra-ui/react';
import { TimelineLite } from 'gsap';

import Logo from 'components/Logo';
import PageContent from 'components/PageContent';

const AuthPageLayout: React.FC = ({ children }) => {
  const { current: tl } = useRef(new TimelineLite());

  useEffect(() => {
    const props = { opacity: 0, y: 30, ease: 'back' };
    tl.from('.title', { ...props }, 1.5).from(
      '.subTitle',
      {
        ...props,
        delay: 0.1,
      },
      '+=0.2'
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid
      height="100vh"
      gridTemplateColumns={{ md: 'repeat(2, 50%)' }}
      overflow="hidden"
    >
      <Box
        paddingX={5}
        paddingTop={5}
        paddingBottom={6}
        height="100vh"
        overflowY="scroll"
        backgroundColor="gray.50"
      >
        <Box width={{ lg: '28rem' }} margin={{ lg: '0 auto' }}>
          <Box
            backgroundColor="gray.50"
            position={{ base: 'fixed', md: 'relative' }}
            width={{ base: '100%', md: 'initial' }}
            top={{ base: 0, md: 'initial' }}
            left={{ base: 0, md: 'initial' }}
            padding={{ base: 5, md: 0 }}
          >
            <Logo to="/" marginBottom={{ md: 12 }} />
          </Box>
          <Box paddingTop={{ base: 14, md: 'initial' }}>{children}</Box>
        </Box>
      </Box>
      <Stack
        spacing={5}
        height="100%"
        padding={8}
        backgroundColor="purple.600"
        display={{ base: 'none', md: 'block' }}
      >
        <Box color="gray.300" maxWidth={550} margin="0 auto">
          <Stack marginBottom={6}>
            <Text
              as="h2"
              fontSize="2.4rem"
              fontWeight="bold"
              lineHeight="2.8rem"
              className="title"
            >
              Keep track of the progress on your job applications!
            </Text>
            <Text className="subTitle">
              Getting a job can be tough, tracking your applications should not.
            </Text>
          </Stack>
          <PageContent />
        </Box>
      </Stack>
    </Grid>
  );
};

export default AuthPageLayout;
