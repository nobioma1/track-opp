import React from 'react';
import { FormControl, FormLabel, Input, Stack, Button } from '@chakra-ui/core';

export const ResetPasswordForm = () => {
  return (
    <Stack as="form" spacing={5}>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input type="password" id="password" />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
        <Input type="password" id="confirm-password" />
      </FormControl>

      <Button size="lg" variantColor="blue">
        Update my password
      </Button>
    </Stack>
  );
};
