import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import AuthSectionLayout from 'components/Auth/AuthSectionLayout';
import { InputField } from 'components/Shared';

export interface ResetPasswordFormData {
  newPassword: string;
  confirmPassword: string;
}

const resetPasswordSchema = yup.object().shape({
  newPassword: yup.string().label('New Password').min(8).required(),
  confirmPassword: yup
    .mixed()
    .test('match', 'Passwords do not match', function () {
      return this.parent.newPassword === this.parent.confirmPassword;
    }),
});

const ResetPassword = () => {
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    errors,
    formState: { isDirty, isValid },
  } = useForm<ResetPasswordFormData>({
    mode: 'onChange',
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmit = async ({ newPassword }: ResetPasswordFormData) => {
    try {
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <AuthSectionLayout
      title="Reset Password."
      subText="Enter a new password that you'll use for log in"
      btnText="Update my password"
      onSubmit={handleSubmit(onSubmit)}
      isLoading={isLoading}
      isDisabled={!isDirty || !isValid}
    >
      <InputField
        inputRef={register}
        type="password"
        label="New password"
        name="newPassword"
        placeholder="**************"
        error={errors.newPassword?.message}
      />
      <InputField
        inputRef={register}
        type="password"
        label="Confirm new password"
        name="confirmPassword"
        placeholder="**************"
        error={errors.confirmPassword?.message}
      />
    </AuthSectionLayout>
  );
};

export default ResetPassword;
