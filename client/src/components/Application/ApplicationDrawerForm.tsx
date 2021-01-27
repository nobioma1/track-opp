import { useState, useEffect, useRef } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Flex,
  Button,
  Text,
  Stack,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AiOutlineDelete } from 'react-icons/ai';

import { InputField } from 'components/Shared';
import { useApplicationsContext, useFirebaseContext, useToaster } from 'hooks';
import { Application, States } from 'types';
import { Dialog } from 'components/Shared';

type Props = {
  isOpen: boolean;
  onClose(): void;
};

export interface ApplicationFormData extends States {
  jobTitle: string;
  companyName: string;
  url: string;
  notes: string;
  concluded: false;
  hired: false;
  interview: false;
  offer: false;
}

const applicationSchema = yup.object().shape({
  jobTitle: yup.string().label('Job title').required(),
  companyName: yup.string().label('Company name').required(),
  url: yup.string().label('URL'),
  notes: yup.string().label('Notes'),
});

const ApplicationDrawerForm: React.FC<Props> = ({ isOpen, onClose }) => {
  const doToast = useToaster();
  const cancelRef = useRef(null);
  const dialogDisclosure = useDisclosure();
  const [isLoading, setLoading] = useState(false);
  const {
    editing,
    clearEditing,
    drawerOnClose,
    drawerIsOpen,
  } = useApplicationsContext();
  const {
    saveNewApplication,
    editApplications,
    deleteApplication,
  } = useFirebaseContext();
  const {
    register,
    handleSubmit,
    errors,
    reset,
    formState: { isDirty, isValid },
  } = useForm<ApplicationFormData>({
    mode: 'onChange',
    resolver: yupResolver(applicationSchema),
  });

  useEffect(() => {
    if (drawerIsOpen) {
      reset({
        jobTitle: '',
        companyName: '',
        url: '',
        notes: '',
      });

      if (editing) {
        reset(editing);
        return;
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editing, drawerIsOpen]);

  const onComplete = (error?: string) => {
    setLoading(false);
    if (error) {
      doToast({
        title: `Error ${editing ? 'updating' : 'saving'} application.`,
        description: error,
        status: 'error',
      });
      return;
    }
    doToast({
      title: `Application ${editing ? 'updated' : 'saved'}.`,
      status: 'success',
    });
    onClose();
    editing && clearEditing();
  };

  const onDeleteSuccess = (error?: string) => {
    if (error) {
      doToast({
        title: `Error deleting application.`,
        status: 'error',
      });
      return;
    }
    dialogDisclosure.onClose();
    drawerOnClose();
  };

  const onSubmit = (data: Application) => {
    setLoading(true);
    if (editing) {
      return editApplications({ ...data, id: editing.id }, onComplete);
    }
    saveNewApplication(data, onComplete);
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader paddingY={3} borderBottomWidth="1px">
              <Flex justifyContent="space-between">
                <Text>{editing ? 'Edit' : 'New'} Application</Text>
                {editing && (
                  <IconButton
                    size="sm"
                    aria-label="delete"
                    colorScheme="red"
                    variant="outline"
                    onClick={dialogDisclosure.onOpen}
                    icon={<AiOutlineDelete size="18px" />}
                  />
                )}
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4} marginBottom={4}>
                  <InputField
                    inputRef={register}
                    label="Job title"
                    name="jobTitle"
                    placeholder="Full-Stack Engineer"
                    error={errors.jobTitle?.message}
                  />
                  <InputField
                    inputRef={register}
                    label="Company name"
                    name="companyName"
                    placeholder="JobHuntPad Inc."
                    error={errors.companyName?.message}
                  />
                  <InputField
                    inputRef={register}
                    label="URL"
                    name="url"
                    placeholder="https://jobhuntpad.com/careers/1"
                    error={errors.url?.message}
                  />

                  <InputField
                    inputRef={register}
                    name="notes"
                    label="Job description | Notes"
                    placeholder="Take notes about your application."
                    error={errors.notes?.message}
                    textarea
                  />
                </Stack>
                <Stack>
                  <Button
                    type="submit"
                    colorScheme="purple"
                    isLoading={isLoading}
                    isDisabled={!isDirty || !isValid}
                  >
                    Save {editing && 'changes'}
                  </Button>
                  <Button variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                </Stack>
              </form>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      {editing && (
        <Dialog
          title="Delete"
          isOpen={dialogDisclosure.isOpen}
          onOpen={dialogDisclosure.onOpen}
          onClose={dialogDisclosure.onClose}
          cancelRef={cancelRef}
          description="Are you sure you want to delete"
        >
          <Button ref={cancelRef} onClick={dialogDisclosure.onClose}>
            No
          </Button>
          <Button
            ml={3}
            colorScheme="red"
            onClick={() => deleteApplication(editing.id, onDeleteSuccess)}
          >
            Yes
          </Button>
        </Dialog>
      )}
    </>
  );
};

export default ApplicationDrawerForm;
