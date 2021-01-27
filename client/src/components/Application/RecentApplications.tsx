import { Stack, Text } from '@chakra-ui/react';

import { useApplicationsContext } from 'hooks';
import ApplicationsList from './ApplicationsList';

const RecentApplications = () => {
  const { state } = useApplicationsContext();

  return (
    <Stack>
      <Text fontSize="md" fontWeight={600}>
        Recently added
      </Text>
      <ApplicationsList
        emptyText="You have not created any new applications"
        applications={state.applications.slice(0, 5)}
        background
      />
    </Stack>
  );
};

export default RecentApplications;
