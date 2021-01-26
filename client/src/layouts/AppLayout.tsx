import { Box } from '@chakra-ui/react';

import Header from 'components/Header';
import { useApplicationsContext } from 'hooks';
import { ApplicationDrawerForm } from 'components/Application';

const AppLayout: React.FC = ({ children }) => {
  const { drawerIsOpen, drawerOnClose } = useApplicationsContext();

  return (
    <>
      <Box backgroundColor="#f4f4fb" minHeight="100vh">
        <Header />
        <Box
          paddingY={{ base: '3.6rem', md: 20 }}
          minHeight="100%"
          width="100%"
        >
          <Box
            paddingX={{ base: 2, md: 4 }}
            maxWidth="1280px"
            width="100%"
            margin="0 auto"
          >
            {children}
          </Box>
        </Box>
      </Box>
      <ApplicationDrawerForm isOpen={drawerIsOpen} onClose={drawerOnClose} />
    </>
  );
};

export default AppLayout;
