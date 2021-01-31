import { FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';

export interface InputLayoutProps {
  name: string;
  label?: string;
  helperText?: string;
  isRequired?: boolean;
  error?: string;
}

const InputLayout: React.FC<InputLayoutProps> = ({
  label,
  name,
  helperText,
  error,
  isRequired,
  children,
}) => {
  return (
    <FormControl id={name} isRequired={isRequired}>
      {label && (
        <FormLabel color="gray.600" fontSize="sm">
          {label}
        </FormLabel>
      )}
      {error && (
        <FormHelperText color="red.300" marginBottom={2}>
          {error}
        </FormHelperText>
      )}
      {children}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default InputLayout;
