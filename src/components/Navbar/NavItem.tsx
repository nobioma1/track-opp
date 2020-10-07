import React from 'react';
import { NavLink } from 'react-router-dom';
import { PseudoBox, Flex } from '@chakra-ui/core';

export interface INavItem {
  name: string;
  path: string;
  exact?: boolean;
}

export interface INavItemComponent extends INavItem {
  onClick?(): void;
  paddingY?: any;
  paddingX?: any;
  justifyContent?: any;
  width?: any;
  height?: any;
  marginX?: any;
  hover?: any;
}

export const NavItem = ({ name, path, ...props }: INavItemComponent) => {
  const isActive = (match: any) => {
    if (!match) return false;

    return match.isExact;
  };

  return (
    <NavLink
      to={path}
      style={{
        width: '100%',
      }}
      activeStyle={{
        color: '#2a69ac',
      }}
      isActive={isActive}
      data-testid="NAV_ITEM"
    >
      <PseudoBox
        {...props}
        as={Flex}
        alignItems="center"
        fontSize="md"
        cursor="pointer"
        transition="opacity 0.4s ease-in-out"
        _hover={props.hover}
      >
        {name}
      </PseudoBox>
    </NavLink>
  );
};
