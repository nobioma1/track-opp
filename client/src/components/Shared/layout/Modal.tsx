import {
  Modal as UIModal,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
} from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  onClose(): void;
  title: string;
  size?: string;
};

const Modal: React.FC<Props> = ({ children, title, isOpen, onClose, size }) => {
  return (
    <UIModal isOpen={isOpen} onClose={onClose} size={size || 'sm'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader paddingBottom={2}>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody marginBottom={5}>{children}</ModalBody>
      </ModalContent>
    </UIModal>
  );
};

export default Modal;
