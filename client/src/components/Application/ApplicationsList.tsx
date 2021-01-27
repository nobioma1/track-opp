import { Text, Stack } from '@chakra-ui/react';

import ApplicationItem from './ApplicationItem';
import { Application } from 'types';

type Props = {
  applications: Application[];
  background?: boolean;
  emptyText: string;
};

const ApplicationsList: React.FC<Props> = ({
  applications,
  emptyText,
  background,
}) => {
  return (
    <Stack>
      {applications.length === 0 ? (
        <Text textAlign="center" color="gray.500">
          {emptyText}
        </Text>
      ) : (
        applications.map((application) => (
          <ApplicationItem
            key={application.id}
            application={application}
            background={background}
          />
        ))
      )}
    </Stack>
  );
};

export default ApplicationsList;
