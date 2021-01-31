import { Input, Textarea } from '@chakra-ui/react';

import InputLayout, { InputLayoutProps } from '../layout/InputLayout';

interface Props extends InputLayoutProps {
  placeholder?: string;
  inputRef: any;
  textarea?: boolean;
  type?: 'text' | 'password' | 'email';
}

const InputField: React.FC<Props> = ({
  type,
  label,
  name,
  inputRef,
  placeholder,
  helperText,
  error,
  isRequired,
  textarea,
}) => {
  return (
    <InputLayout
      label={label}
      name={name}
      helperText={helperText}
      error={error}
      isRequired={isRequired}
    >
      {textarea ? (
        <Textarea
          ref={inputRef}
          name={name}
          focusBorderColor="purple.600"
          placeholder={placeholder}
          isInvalid={!!error}
        />
      ) : (
        <Input
          ref={inputRef}
          type={type || 'text'}
          name={name}
          focusBorderColor="purple.600"
          placeholder={placeholder}
          isInvalid={!!error}
        />
      )}
    </InputLayout>
  );
};

export default InputField;
