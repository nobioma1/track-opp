import { useToast } from '@chakra-ui/react';

interface ToastConfig {
  title: string;
  status: 'error' | 'success';
  description?: string;
  duration?: number;
}

export const useToaster = () => {
  const toast = useToast();

  const doToast = ({ title, description, status, ...rest }: ToastConfig) => {
    toast({
      title,
      description,
      status,
      position: 'top-right',
      duration: 6000,
      isClosable: true,
      ...rest,
    });
  };

  return doToast;
};
