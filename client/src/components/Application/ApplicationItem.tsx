import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Box, Text, Flex, Stack, IconButton } from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
import { GrLineChart } from 'react-icons/gr';

import { Application, StageValue } from 'types';
import { useApplicationsContext, useFirebaseContext } from 'hooks';
import ApplicationStagesDropdown from './ApplicationStagesDropdown';

dayjs.extend(relativeTime);

type Props = {
  application: Application;
  background?: boolean;
};

const ApplicationItem: React.FC<Props> = ({ application, background }) => {
  const { setCurrentStage } = useFirebaseContext();
  const { drawerOnOpen } = useApplicationsContext();

  const { id, jobTitle, companyName, url, notes, ...states } = application;

  return (
    <Box
      borderWidth="1px"
      borderRadius={5}
      padding={{ base: 2, md: 3 }}
      background={background ? '#FFF' : 'initial'}
    >
      <Flex
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        alignItems="center"
      >
        <Flex alignItems="center">
          <Box display={{ base: 'none', md: 'block' }} mr={1}>
            <GrLineChart size="12px" opacity={0.5} />
          </Box>
          <Text fontSize="sm" color="gray.500" mr={{ md: 3 }}>
            Current Stage:
          </Text>
        </Flex>
        <Stack isInline width={{ base: 'fit-content', md: '12rem' }}>
          <ApplicationStagesDropdown
            {...states}
            onChange={(e) =>
              setCurrentStage(id, e.target.value as StageValue, () => {})
            }
          />
          <IconButton
            icon={<FiEdit />}
            aria-label="edit"
            size="sm"
            colorScheme="purple"
            variant="ghost"
            onClick={() => drawerOnOpen(application)}
          />
        </Stack>
      </Flex>

      <Stack spacing={3}>
        <Text fontWeight="bold" fontSize="2xl">
          {application.jobTitle}
        </Text>
        <Stack spacing={1}>
          <Text>{application.companyName}</Text>
          <Text>{application.notes}</Text>
        </Stack>
        <Stack spacing={1}>
          <Text fontSize="sm" color="gray.400">
            Created {dayjs(application.timestamp).fromNow()}
          </Text>
          {application?.updatedTimestamp && (
            <Text fontSize="sm" color="gray.400" ml={2}>
              Last updated {dayjs(application.updatedTimestamp).fromNow()}
            </Text>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ApplicationItem;
