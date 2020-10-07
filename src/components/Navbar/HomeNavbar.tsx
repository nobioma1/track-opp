import React from 'react';
import { Flex } from '@chakra-ui/core';

import { AppRoutes } from '../../consts';
import { UserNavMenu } from './UserNavMenu';

const userMenuItems = [
  {
    name: 'Logout',
    path: AppRoutes.logout,
  },
];

export const HomeNavbar = () => {
  return (
    <Flex width="100%" justifyContent="flex-end">
      <Flex justifyContent="center" alignItems="center" flex="1"></Flex>
      <UserNavMenu userNavItems={userMenuItems} />
    </Flex>
  );
};
