import {
  Editable,
  EditablePreview,
  EditableInput,
  Stack,
  Text,
} from '@chakra-ui/react';
import { UpdateInput } from 'components/Profile/Profile';
import { InputLayoutProps } from './InputLayout';

interface Props extends InputLayoutProps {
  value: string;
  isDisabled?: boolean;
  onSubmit?(input: UpdateInput): void;
}

const EditableInputField: React.FC<Props> = ({
  label,
  name,
  onSubmit,
  isDisabled,
  value,
}) => {
  return (
    <Stack spacing={1}>
      <Text fontSize="sm" color="gray.500">
        {label}
      </Text>
      <Editable
        submitOnBlur={true}
        isDisabled={isDisabled}
        variant="flushed"
        colorScheme="purple"
        defaultValue={value}
        onSubmit={(str) => {
          const newValue = str.trim();
          if (onSubmit && value !== newValue) {
            onSubmit({ name, value: newValue });
          }
        }}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
    </Stack>
  );
};

export default EditableInputField;
