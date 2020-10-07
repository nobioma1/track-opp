import React from 'react';
import { Flex, Icon } from '@chakra-ui/core';

import { NavItem } from './NavItem';

interface IHomeNavItem {
  icon: any;
  name: string;
  path: string;
}

export const HomeNavItem = ({ icon, name, path }: IHomeNavItem) => {
  return (
    <Flex alignItems="center" justifyContent="center" marginX={5}>
      <Icon as={icon} size="25px" mr={2} color="blue.500" />
      <NavItem
        name={name}
        path={path}
        hover={{
          opacity: 0.7,
        }}
      />
    </Flex>
  );
};
