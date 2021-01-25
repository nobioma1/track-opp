import { Heading, Flex, Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/logo.svg';

type Props = {
  to: string;
  marginBottom?: number | { [key: string]: number };
};

const Logo: React.FC<Props> = ({ to, ...styles }) => {
  return (
    <Link to={to}>
      <Flex alignItems="center" {...styles}>
        <Box
          width={{ base: '15px', md: '22px' }}
          height={{ base: '15px', md: '22px' }}
          marginRight={2}
        >
          <Image src={LogoImg} alt="jobhuntpad" fallback={<div></div>} />
        </Box>
        <Heading as="h1" fontSize={{ base: 'md', md: 'xl' }}>
          JobHuntPad
        </Heading>
      </Flex>
    </Link>
  );
};

export default Logo;
