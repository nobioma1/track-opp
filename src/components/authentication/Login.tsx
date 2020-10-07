import React from 'react';
import { FormControl, FormLabel, Input, Stack, Button } from '@chakra-ui/core';

import { AuthLayout } from './AuthLayout';
import { AppRoutes } from '../../consts';
import { UILink } from '../shared';

export const Login = () => {
  return (
    <AuthLayout title="Log in your account.">
      <Stack as="form" spacing={5}>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input type="email" id="email" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input type="email" id="email" />
        </FormControl>

        <Button size="lg" variantColor="blue">
          Log in
        </Button>
      </Stack>

      <Stack marginY={10} spacing={3}>
        <UILink
          to={AppRoutes.forgotPassword}
          title="Having trouble logging in? Reset Password."
        />

        <UILink
          to={AppRoutes.signup}
          title="Don't have an account? Create account."
        />
      </Stack>
    </AuthLayout>
  );
};
