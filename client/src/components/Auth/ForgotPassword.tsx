import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import AuthSectionLayout from './AuthSectionLayout';
import { InputField } from '../Shared';

export interface ForgotPasswordFormData {
  email: string;
}

const forgotPasswordSchema = yup.object().shape({
  email: yup.string().label('E-mail').required(),
});

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    errors,
    formState,
  } = useForm<ForgotPasswordFormData>({
    mode: 'onChange',
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    console.log(data);
  };

  const footerLinks = [
    {
      linkTitle: 'Go to log in',
      to: '/',
    },
    {
      linkTitle: 'Create an account',
      to: '/create-account',
    },
  ];

  return (
    <AuthSectionLayout
      title="Forgot password."
      subText={`
        Enter email associated with your account, if we find your 
        account, we'll send a reset email to your email.
      `}
      btnText="Send password reset link"
      onSubmit={handleSubmit(onSubmit)}
      footerLinks={footerLinks}
      isDisabled={!formState.isValid}
    >
      <InputField
        inputRef={register}
        label="Your e-mail"
        name="email"
        placeholder="name@domain.com"
        error={errors.email?.message}
      />
    </AuthSectionLayout>
  );
};

export default ForgotPassword;
