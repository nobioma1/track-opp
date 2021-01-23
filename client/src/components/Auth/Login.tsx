import { Stack, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import AuthSectionLayout from './AuthSectionLayout';
import { InputField } from '../Shared';

export interface LoginFormData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup.string().label('Email').required(),
  password: yup.string().label('Password').required(),
});

const Login = () => {
  const { register, handleSubmit, errors, formState } = useForm<LoginFormData>({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  const FooterSection = (
    <Stack>
      <Button colorScheme="purple">Log in with Google</Button>
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
      isDisabled={!formState.isValid}
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
