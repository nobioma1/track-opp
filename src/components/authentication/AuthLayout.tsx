import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/core';

import { BaseHeader } from '../header';

export const AuthLayout: React.FunctionComponent<{ title: string }> = ({
  children,
  title,
}) => {
  return (
    <>
      <BaseHeader />
      <Flex
        width="100%"
        flexDirection="column"
        alignItems="center"
        paddingX={3}
        paddingTop={16}
      >
        <Box
          width={{ base: 'full', sm: 'lg' }}
          background="linear-gradient(319deg, #fce055 0%, #256eff 37%, #46237a 100%)"
          borderRadius={10}
          paddingTop={2}
          boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
        >
          <Box
            width="100%"
            background="white"
            padding={5}
            borderBottomLeftRadius={10}
            borderBottomRightRadius={10}
          >
            <Heading fontSize="3xl" marginY={5}>
              {title}
            </Heading>
            {children}
          </Box>
        </Box>
      </Flex>
    </>
  );
};
