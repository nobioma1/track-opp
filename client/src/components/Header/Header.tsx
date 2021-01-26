import { Flex, useMediaQuery } from '@chakra-ui/react';

import Logo from 'components/Logo';
import NavMenu from './NavMenu';

const Header = () => {
  const [showMenuBtn] = useMediaQuery('(max-width: 768px)');

  return (
    <Flex
      padding={{ base: 2, md: 4 }}
      backgroundColor="white"
      position="fixed"
      width="100%"
      zIndex={999}
    >
      <Flex justifyContent="space-between" alignItems="center" width="100%">
        <Logo to="/dashboard" />
        <NavMenu isVisible={showMenuBtn} />
      </Flex>
    </Flex>
  );
};

export default Header;
