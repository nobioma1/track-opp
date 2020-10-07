import React from 'react';
import { Button, Flex, Heading } from '@chakra-ui/core';
import { VscActivateBreakpoints } from 'react-icons/vsc';
import { useHistory } from 'react-router-dom';

import { AppRoutes } from '../../consts';

interface IHeader {}

export const HeaderWrapper: React.FunctionComponent<IHeader> = ({
  children,
}) => {
  const history = useHistory();

  return (
    <Flex
      alignItems="center"
      background="white"
      padding={2}
      position="fixed"
      top={0}
      width="100%"
    >
      <Flex
        alignItems="center"
        cursor="pointer"
        onClick={() => history.push(AppRoutes.landing)}
      >
        <VscActivateBreakpoints color="#2a69ac" />
        <Heading
          fontFamily="Lobster, cursive"
          fontSize="1.9rem"
          letterSpacing={2}
          marginLeft={2}
          color="blue.600"
        >
          Point.
        </Heading>
      </Flex>

      <Flex flex="1">{children}</Flex>
    </Flex>
  );
};
