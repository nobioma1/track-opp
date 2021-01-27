import {
  Heading,
  Avatar,
  Stack,
  Box,
  Flex,
  Text,
  Accordion,
} from '@chakra-ui/react';
import dayjs from 'dayjs';

import { AccordionLayout, Card, EditableInputField } from 'components/Shared';
import { useAuthContext, useFirebaseContext } from 'hooks';
import { useToaster } from 'hooks';
import UpdatePassword from './UpdatePassword';
import Feedback from './Feedback';
import { LoginTypes } from 'types';

export interface UpdateInput {
  name: string;
  value: string;
}

const Profile = () => {
  const { user } = useAuthContext();

  const doToast = useToaster();

  const { updateUserDetails } = useFirebaseContext();

  const onSubmitHandler = (input: UpdateInput) => {
    updateUserDetails(input, (error) => {
      if (error) {
        return doToast({
          title: 'Profile update not saved',
          description: error,
          status: 'error',
        });
      }
      doToast({
        title: 'Profile updated',
        status: 'success',
      });
    });
  };

  return (
    <Stack maxWidth="580px" width="100%" margin="0 auto">
      <Card>
        <Heading fontSize="xl">Profile</Heading>
        <Stack alignItems="center">
          <Avatar
            size="xl"
            name={`${user?.firstName} ${user?.lastName}`}
            src={user?.photoURL}
          />
          <Stack width="100%">
            <Box>
              <Text size="lg" textDecoration="underline">
                User Information <br />
              </Text>
              <Text color="gray.500" fontSize="sm" fontStyle="italic">
                * Click on text edit, email cannot be changed.
              </Text>
            </Box>

            <Flex
              flexDir={{ base: 'column', md: 'row' }}
              width="100%"
              justifyContent="space-between"
            >
              <Box width={{ md: '50%' }} mr={{ md: 3 }}>
                <EditableInputField
                  value={user?.firstName || ''}
                  label="Firstname"
                  name="firstName"
                  onSubmit={onSubmitHandler}
                />
              </Box>
              <Box width={{ md: '50%' }}>
                <EditableInputField
                  value={user?.lastName || ''}
                  label="Lastname"
                  name="lastName"
                  onSubmit={onSubmitHandler}
                />
              </Box>
            </Flex>
            <EditableInputField
              value={user?.email || ''}
              label="Email Address"
              name="Email Address"
              isDisabled
            />
            <Stack>
              <Text fontSize="sm" color="gray.500">
                Joined
              </Text>
              <Text>{dayjs(user?.timestamp).format('dddd, DD MMMM YYYY')}</Text>
            </Stack>
          </Stack>
        </Stack>
      </Card>

      <Accordion allowToggle>
        <Stack>
          {user?.loginType === LoginTypes.emailPassword && (
            <AccordionLayout title="Update password">
              <UpdatePassword />
            </AccordionLayout>
          )}
          <AccordionLayout title="Send us a feedback">
            <Feedback />
          </AccordionLayout>
        </Stack>
      </Accordion>
    </Stack>
  );
};

export default Profile;
