import { useState } from 'react';
import { Stack, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FcGoogle } from 'react-icons/fc';

import AuthSectionLayout from 'components/Auth/AuthSectionLayout';
import { InputField } from 'components/Shared';
import { useFirebaseContext, useToaster } from 'hooks';

export interface LoginFormData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup.string().email().label('Email').required(),
  password: yup.string().label('Password').required(),
});

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    errors,
    getValues,
    reset,
    formState: { isDirty, isValid },
  } = useForm<LoginFormData>({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });

  const doToast = useToaster();
  const { logInWithEmailAndPassword, signInWithGoogle } = useFirebaseContext();

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    try {
      await logInWithEmailAndPassword(data);
    } catch (error) {
      doToast({
        title: 'Error logging in',
        description:
          error?.code && error?.code.match('auth')
            ? 'Invalid e-mail or password.'
            : 'Something went wrong, please try again!',
        status: 'error',
      });
      reset({ ...getValues(), password: '' });
      setLoading(false);
    }
  };

  const FooterSection = (
    <Stack>
      <Button
        variant="outline"
        leftIcon={<FcGoogle />}
        onClick={signInWithGoogle}
        colorScheme="purple"
        size="lg"
      >
        Continue with Google
      </Button>
    </Stack>
  );

  const footerLinks = [
    {
      linkTitle: "Don't have an account? Create account",
      to: '/create-account',
    },
    {
      linkTitle: 'Forgot Password',
      to: '/forgot-password',
    },
  ];

  return (
    <AuthSectionLayout
      title="Welcome, Log in."
      subText="Log in with the credentials you entered on creating an account."
      btnText="Log in"
      onSubmit={handleSubmit(onSubmit)}
      footerSection={FooterSection}
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
      <InputField
        inputRef={register}
        type="password"
        label="Password"
        name="password"
        placeholder="**********"
        error={errors.password?.message}
      />
    </AuthSectionLayout>
  );
};

export default Login;
