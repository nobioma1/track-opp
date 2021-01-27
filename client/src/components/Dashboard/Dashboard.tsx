import React from 'react';
import { Stack, Text, Box } from '@chakra-ui/react';

import CountBoard from 'components/CountBoard';
import { RecentApplications } from 'components/Application';
import { useApplicationsContext, useAuthContext } from 'hooks';

const getGreeting = () => {
  const hours = new Date().getHours();
  if (hours >= 0 && hours <= 11) {
    return 'Good Morning';
  }
  if (hours >= 12 && hours <= 17) {
    return 'Good Afternoon';
  }
  return 'Good Evening';
};

const Dashboard = () => {
  const { user } = useAuthContext();
  const { drawerOnOpen } = useApplicationsContext();

  return (
    <>
      <Stack spacing={4}>
        <Box>
          <Text fontWeight="bold" fontSize={{ base: 'xl', md: '3xl' }}>
            {getGreeting()},{' '}
            <Text as="span" textTransform="capitalize">
              {user?.firstName}
            </Text>
          </Text>
          <Text fontSize="sm">
            Welcome to your personal job tracker. Let's get hunting.{' '}
            <Text as="span" aria-label="lion" role="img">
              🦁
            </Text>
          </Text>
        </Box>

        <CountBoard onOpen={drawerOnOpen} />
        <RecentApplications />
      </Stack>
    </>
  );
};

export default Dashboard;
