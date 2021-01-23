import { Heading, Flex, Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/logo.svg';

type Props = {
  to: string;
  marginBottom?: number;
};

const Logo: React.FC<Props> = ({ to, ...styles }) => {
  return (
    <Link to={to}>
      <Flex {...styles}>
        <Box width="22px" height="22px" marginRight={2}>
          <Image src={LogoImg} alt="jobhuntpad" fallback={<div></div>} />
        </Box>
        <Heading as="h1" fontSize="xl">
          Jobhuntpad
        </Heading>
      </Flex>
    </Link>
  );
};

export default Logo;
