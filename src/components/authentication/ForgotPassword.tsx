import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
} from '@chakra-ui/core';

import { AuthLayout } from './AuthLayout';
import { AppRoutes } from '../../consts';
import { UILink } from '../shared';

export const ForgotPassword = () => {
  return (
    <AuthLayout title="Having trouble logging in?">
      <Stack as="form" spacing={5}>
        <Text>
          Enter your account email address to reset your password. <br /> An
          email will be sent to you.
        </Text>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input type="email" id="email" />
        </FormControl>

        <Button size="lg" variantColor="blue">
          Send me a reset link
        </Button>
      </Stack>

      <Stack marginY={10} spacing={3}>
        <UILink to={AppRoutes.login} title="Already have an account? Log in." />
        <UILink
          to={AppRoutes.signup}
          title="Don't have an account? Create account."
        />
      </Stack>
    </AuthLayout>
  );
};
