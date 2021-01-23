import { Stack, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import AuthSectionLayout from './AuthSectionLayout';
import { InputField } from '../Shared';

export interface CreateAccountFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const createAccountSchema = yup.object().shape({
  firstName: yup.string().label('Firstname').required(),
  lastName: yup.string().label('Lastname').required(),
  email: yup.string().label('Email').required(),
  password: yup.string().label('Password').required(),
});

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    errors,
    formState,
  } = useForm<CreateAccountFormData>({
    mode: 'onChange',
    resolver: yupResolver(createAccountSchema),
  });

  const onSubmit = (data: CreateAccountFormData) => {
    console.log(data);
  };

  const FooterSection = (
    <Stack>
      <Button>Sign up with Google</Button>
    </Stack>
  );

  const footerLinks = [
    {
      linkTitle: 'Already have an account? Log in.',
      to: '/',
    },
  ];

  return (
    <AuthSectionLayout
      title="Create an account."
      subText="Start today and keep track on job applications, sign up with us now."
      btnText="Create my account"
      onSubmit={handleSubmit(onSubmit)}
      footerSection={FooterSection}
      footerLinks={footerLinks}
      isDisabled={!formState.isValid}
    >
      <InputField
        inputRef={register}
        label="Firstname"
        name="firstName"
        placeholder="Hally"
        error={errors.firstName?.message}
      />
      <InputField
        inputRef={register}
        label="Lastname"
        name="lastName"
        placeholder="Jordan"
        error={errors.lastName?.message}
      />
      <InputField
        inputRef={register}
        label="Your e-mail"
        name="email"
        helperText="We'd never share your email."
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

export default CreateAccount;
