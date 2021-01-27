import { Button } from '@chakra-ui/react';
import { BiAddToQueue } from 'react-icons/bi';

type Props = {
  onOpen(): void;
  btnRef?: React.RefObject<HTMLButtonElement>;
};

const NewApplicationButton: React.FC<Props> = ({ onOpen, btnRef }) => {
  return (
    <Button
      ref={btnRef}
      size="sm"
      colorScheme="purple"
      width="fit-content"
      onClick={() => onOpen()}
      leftIcon={<BiAddToQueue size="16px" />}
    >
      New Application
    </Button>
  );
};

export default NewApplicationButton;
