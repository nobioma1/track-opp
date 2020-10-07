import React from 'react';

import { AuthLayout } from './AuthLayout';
import { ResetPasswordForm } from './ResetPasswordForm';

export const ResetPassword = () => {
  return (
    <AuthLayout title="Update your account password.">
      <ResetPasswordForm />
    </AuthLayout>
  );
};
