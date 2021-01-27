import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

import Card from './Card';

type Props = {
  title?: string;
  isDisabled?: boolean;
};

const AccordionLayout: React.FC<Props> = ({ children, title, isDisabled }) => {
  return (
    <Card>
      <AccordionItem isDisabled={isDisabled}>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>{children}</AccordionPanel>
      </AccordionItem>
    </Card>
  );
};

export default AccordionLayout;
