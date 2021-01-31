import { Stack } from '@chakra-ui/react';

type Props = {
  fit?: boolean;
};

const Card: React.FC<Props> = ({ children, fit }) => {
  return (
    <Stack
      boxShadow="1px 2px 0 rgba(0, 0, 0, 0.05)"
      width={fit ? 'fit-content' : '100%'}
      borderRadius={6}
      backgroundColor="#fff"
      padding={3}
    >
      {children}
    </Stack>
  );
};

export default Card;
