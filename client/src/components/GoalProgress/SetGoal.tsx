import { useState, useEffect } from 'react';
import {
  Text,
  Button,
  Stack,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { useApplicationsContext, useFirebaseContext } from 'hooks';
import { Modal } from 'components/Shared';

type Props = {
  isOpen: boolean;
  onClose(): void;
};

const SetGoal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { setDailyGoal } = useFirebaseContext();
  const { dailyGoal } = useApplicationsContext();
  const [value, setValue] = useState(1);

  useEffect(() => {
    isOpen && setValue(dailyGoal || 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const onSubmit = () => {
    setDailyGoal(value, (error) => {
      if (error) {
        return;
      }
      onClose();
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Set daily goal">
      <Stack>
        <Text fontSize="sm" color="gray.600">
          set the desired amount in number you would like to reach daily.
        </Text>
        <NumberInput
          min={0}
          value={value}
          focusBorderColor="purple"
          onChange={(val) => {
            const num = parseInt(val, 10);
            if (num >= 0) setValue(num);
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button colorScheme="purple" onClick={onSubmit}>
          Set my daily goal
        </Button>
      </Stack>
    </Modal>
  );
};

export default SetGoal;
