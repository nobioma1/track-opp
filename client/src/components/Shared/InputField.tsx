import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react';

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  isRequired?: boolean;
  inputRef: any;
  error?: string;
  type?: 'text' | 'password' | 'email';
};

const InputField: React.FC<Props> = ({
  type,
  label,
  name,
  inputRef,
  placeholder,
  helperText,
  error,
  isRequired,
}) => {
  return (
    <FormControl id={name} isRequired={isRequired}>
      {label && <FormLabel>{label}</FormLabel>}
      {error && (
        <FormHelperText color="red.300" marginBottom={2}>
          {error}
        </FormHelperText>
      )}
      <Input
        ref={inputRef}
        type={type || 'text'}
        name={name}
        focusBorderColor="purple.600"
        placeholder={placeholder}
        isInvalid={!!error}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default InputField;
