import { Flex, WrapItem, Text, Grid } from '@chakra-ui/react';

type Props = {
  count?: string;
  title: string;
};

const CountItem: React.FC<Props> = ({ children, count, title }) => {
  return (
    <WrapItem
      flexDirection="column"
      alignItems="center"
      height="120px"
      width="120px"
    >
      <Grid gridTemplateRows="100px 20px">
        <Flex alignItems="center" justifyContent="center">
          {count ? (
            <Text fontWeight="bold" fontSize="5xl">
              {count}
            </Text>
          ) : (
            children
          )}
        </Flex>
        <Text textAlign="center" fontSize="sm">
          {title}
        </Text>
      </Grid>
    </WrapItem>
  );
};

export default CountItem;
