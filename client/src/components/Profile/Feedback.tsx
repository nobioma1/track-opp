import { useState } from 'react';
import {
  Button,
  Stack,
  Textarea,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';

import { useFirebaseContext, useToaster } from 'hooks';

const Feedback = () => {
  const [isLoading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  const { sendFeedback } = useFirebaseContext();
  const doToast = useToaster();

  const onSubmit = async () => {
    if (!feedback) return;

    setLoading(true);
    sendFeedback(feedback, (error) => {
      setLoading(false);
      if (error) {
        return doToast({
          title: error,
          status: 'error',
        });
      }

      doToast({
        title: 'Feedback sent, Thank you!',
        status: 'success',
      });
      setFeedback('');
    });
  };

  return (
    <Stack>
      <FormControl>
        <FormLabel fontSize="sm" color="gray.500">
          Want to give us a feedback?
        </FormLabel>
        <Textarea
          type="text"
          focusBorderColor="purple.500"
          placeholder="..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </FormControl>
      <Button
        isLoading={isLoading}
        leftIcon={<FiSend />}
        colorScheme="purple"
        onClick={() => onSubmit()}
        isDisabled={feedback.length < 2}
      >
        Send
      </Button>
    </Stack>
  );
};

export default Feedback;
