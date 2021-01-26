import { Flex, Spinner, Stack } from '@chakra-ui/react';

import Logo from 'components/Logo';

const SplashScreen = () => {
  return (
    <Flex
      backgroundColor="#6B46C1"
      height="100vh"
      width="100vw"
      position="fixed"
      justifyContent="center"
      alignItems="center"
      top={0}
    >
      <Stack alignItems="center" spacing={4}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="purple.400"
          size="lg"
        />
        <Logo to="/" light />
      </Stack>
    </Flex>
  );
};

export default SplashScreen;
