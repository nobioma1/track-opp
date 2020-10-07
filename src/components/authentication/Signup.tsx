import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  FormHelperText,
} from '@chakra-ui/core';

import { AuthLayout } from './AuthLayout';
import { AppRoutes } from '../../consts';
import { UILink } from '../shared';

export const Signup = () => {
  return (
    <AuthLayout title="Create your account.">
      <Stack as="form" spacing={5}>
        <Stack
          justifyContent="space-between"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <FormControl width={{ base: '100%', md: '48%' }}>
            <FormLabel htmlFor="first-name">First name</FormLabel>
            <Input type="text" id="first-name" />
          </FormControl>

          <FormControl width={{ base: '100%', md: '48%' }}>
            <FormLabel htmlFor="last-name">Last name</FormLabel>
            <Input type="text" id="last-name" />
          </FormControl>
        </Stack>

        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input type="email" id="email" aria-describedby="email-helper-text" />
          <FormHelperText id="email-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input type="password" id="password" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
          <Input type="password" id="confirm-password" />
        </FormControl>

        <Button size="lg" variantColor="blue">
          Create account
        </Button>
      </Stack>

      <Stack marginY={10} spacing={3}>
        <UILink to={AppRoutes.login} title="Already have an account? Log in." />
      </Stack>
    </AuthLayout>
  );
};
