import React from 'react';
import { Avatar, Flex, PseudoBox, Text } from '@chakra-ui/core';
import { useRouteMatch } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';

import { NavItem, INavItem } from './NavItem';

export interface IUserNavMenu {
  userNavItems: INavItem[];
}

export const UserNavMenu = ({ userNavItems }: IUserNavMenu) => {
  const { url } = useRouteMatch();

  return (
    <PseudoBox cursor="pointer" role="group">
      <PseudoBox
        as={Flex}
        minWidth="8rem"
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Avatar name="John Doe" size="sm" marginRight={3} />
        <Text
          marginRight={3}
          fontSize="md"
          textAlign="center"
          color="gray.700"
          fontWeight="bold"
        >
          John Doe
        </Text>
        <HiChevronDown />
      </PseudoBox>

      {/* dropdown */}
      <PseudoBox
        as={Flex}
        display="none"
        position="absolute"
        backgroundColor="#fff"
        paddingTop={5}
        top="44px"
        width="12rem"
        right={0}
        _groupHover={{ display: 'block' }}
      >
        {userNavItems.map(({ path, ...navItem }: INavItem) => (
          <Flex key={navItem.name}>
            <NavItem
              {...navItem}
              path={`${url}${path}`}
              paddingY={4}
              paddingX={5}
              justifyContent="flex-end"
              width="100%"
              hover={{
                backgroundColor: 'blue.300',
                color: 'white',
              }}
            />
          </Flex>
        ))}
      </PseudoBox>
    </PseudoBox>
  );
};
