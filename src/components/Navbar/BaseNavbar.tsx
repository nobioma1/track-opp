import React from 'react';
import { Button, Flex } from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';

import { AppRoutes } from '../../consts';

export const BaseNavbar = () => {
  const history = useHistory();

  return (
    <Flex width="100%" justifyContent="flex-end">
      <Button
        onClick={() => history.push(AppRoutes.signup)}
        variantColor="blue"
      >
        Create Account
      </Button>
    </Flex>
  );
};
