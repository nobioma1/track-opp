import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import AuthSectionLayout from './AuthSectionLayout';
import { InputField } from '../Shared';

export interface ResetPasswordFormData {
  newPassword: string;
  confirmPassword: string;
}

const resetPasswordSchema = yup.object().shape({
  newPassword: yup.string().label('New Password').required(),
  confirmPassword: yup.string().label('Confirm Password').required(),
});

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    errors,
    formState,
  } = useForm<ResetPasswordFormData>({
    mode: 'onChange',
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmit = (data: ResetPasswordFormData) => {
    console.log(data);
  };

  return (
    <AuthSectionLayout
      title="Reset Password."
      subText="Enter a new password that you'll use for log in"
      btnText="Update my password"
      onSubmit={handleSubmit(onSubmit)}
      isDisabled={!formState.isValid}
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
