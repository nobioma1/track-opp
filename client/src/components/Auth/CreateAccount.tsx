import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import AuthSectionLayout from 'components/Auth/AuthSectionLayout';
import { InputField } from 'components/Shared';
import { useFirebaseContext, useToaster } from 'hooks';

export interface CreateAccountFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const createAccountSchema = yup.object().shape({
  firstName: yup.string().label('Firstname').required(),
  lastName: yup.string().label('Lastname').required(),
  email: yup.string().email().label('Email').required(),
  password: yup.string().min(8).label('Password').required(),
});

const CreateAccount = () => {
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    errors,
    getValues,
    reset,
    formState: { isDirty, isValid },
  } = useForm<CreateAccountFormData>({
    mode: 'onChange',
    resolver: yupResolver(createAccountSchema),
  });

  const doToast = useToaster();
  const { createUserWithEmailAndPassword } = useFirebaseContext();

  const onSubmit = (data: CreateAccountFormData) => {
    setLoading(true);
    createUserWithEmailAndPassword(
      data,
      () => {},
      (msg) => {
        doToast({
          title: 'Error creating account.',
          description: msg,
          status: 'error',
        });
        reset({ ...getValues(), password: '' });
        setLoading(false);
      }
    );
  };

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
      footerLinks={footerLinks}
      isLoading={isLoading}
      isDisabled={!isDirty || !isValid}
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
