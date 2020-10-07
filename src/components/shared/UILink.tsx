import React from 'react';
import { Link } from '@chakra-ui/core';
import { Link as RouteLink } from 'react-router-dom';

interface IUILink {
  title: string;
  to: string;
}

export const UILink = ({ title, ...props }: IUILink) => {
  return (
    <Link
      {...props}
      _focus={{
        outline: 'none',
      }}
      // @ts-ignore
      as={RouteLink}
    >
      {title}
    </Link>
  );
};
