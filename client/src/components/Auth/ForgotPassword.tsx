import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import AuthSectionLayout from 'components/Auth/AuthSectionLayout';
import { InputField } from 'components/Shared';
import { useFirebaseContext } from 'hooks';
import { Feedback } from 'types';

export interface ForgotPasswordFormData {
  email: string;
}

const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email().label('E-mail').required(),
});

const ForgotPassword = () => {
  const [isLoading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const {
    register,
    handleSubmit,
    errors,
    reset,
    formState: { isDirty, isValid },
  } = useForm<ForgotPasswordFormData>({
    mode: 'onChange',
    resolver: yupResolver(forgotPasswordSchema),
  });

  const { forgotPassword } = useFirebaseContext();

  const onSubmit = async ({ email }: ForgotPasswordFormData) => {
    setLoading(true);
    try {
      await forgotPassword(email);
      setFeedback({
        status: 'success',
        msg: `Password reset link has been sent to '${email}'`,
      });
      reset({ email: '' });
    } catch (error) {
      setFeedback({
        status: 'error',
        msg: `Error sending password reset link. Please try again!'`,
      });
    } finally {
      setLoading(false);
    }
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
      feedback={feedback}
      btnText="Send password reset link"
      onSubmit={handleSubmit(onSubmit)}
      footerLinks={footerLinks}
      isLoading={isLoading}
      isDisabled={!isDirty || !isValid}
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
