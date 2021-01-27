import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { InputField } from 'components/Shared';
import { useFirebaseContext, useToaster } from 'hooks';

export interface UpdatePasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const updatePasswordSchema = yup.object().shape({
  currentPassword: yup.string().label('Current Password').required(),
  newPassword: yup.string().label('New Password').min(8).required(),
  confirmPassword: yup
    .mixed()
    .test('match', 'Passwords do not match', function () {
      return this.parent.newPassword === this.parent.confirmPassword;
    }),
});

const UpdatePassword = () => {
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    errors,
    reset,
    formState: { isDirty, isValid },
  } = useForm<UpdatePasswordFormData>({
    mode: 'onChange',
    resolver: yupResolver(updatePasswordSchema),
  });

  const { updatePassword } = useFirebaseContext();
  const doToast = useToaster();

  const onSubmit = async (data: UpdatePasswordFormData) => {
    setLoading(true);
    await updatePassword(data, (error) => {
      reset();
      setLoading(false);
      if (error) {
        return doToast({
          status: 'error',
          title: 'Error updating password',
          description: error,
        });
      }
      doToast({
        status: 'success',
        title: 'Password updated.',
      });
    });
  };

  return (
    <Stack as="form" onSubmit={handleSubmit(onSubmit)}>
      <InputField
        inputRef={register}
        type="password"
        label="Current password"
        name="currentPassword"
        placeholder="**************"
        error={errors.currentPassword?.message}
      />
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
      <Button
        colorScheme="purple"
        type="submit"
        isLoading={isLoading}
        isDisabled={!isDirty || !isValid}
      >
        Update Password
      </Button>
    </Stack>
  );
};

export default UpdatePassword;
