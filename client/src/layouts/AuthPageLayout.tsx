import { Grid, Box, Text, Image, Stack } from '@chakra-ui/react';

import Logo from 'components/Logo';
import interview from '../assets/interview.svg';
import typing from '../assets/typing.svg';
import plan from '../assets/plan.svg';

type ContentLayoutProps = {
  image: string;
  title: string;
  description: string;
  bg?: boolean;
};

const ContentLayout: React.FC<ContentLayoutProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <Grid alignItems="center" gridTemplateColumns="40% 1fr" gap={10}>
      <Box>
        <Image src={image} alt={title} />
      </Box>
      <Box color="gray.300">
        <Text as="h3" fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Text>{description}</Text>
      </Box>
    </Grid>
  );
};

const AuthPageLayout: React.FC = ({ children }) => {
  return (
    <Grid
      height="100vh"
      gridTemplateColumns={{ md: 'repeat(2, 50%)' }}
      overflow="hidden"
    >
      <Box
        paddingX={5}
        paddingTop={5}
        paddingBottom={12}
        height="100vh"
        overflowY="scroll"
        backgroundColor="gray.50"
      >
        <Box width={{ lg: '28rem' }} margin={{ lg: '0 auto' }}>
          <Box
            backgroundColor="gray.50"
            position={{ base: 'fixed', md: 'relative' }}
            width={{ base: '100%', md: 'initial' }}
            top={{ base: 0, md: 'initial' }}
            left={{ base: 0, md: 'initial' }}
            padding={{ base: 5, md: 0 }}
          >
            <Logo to="/" marginBottom={{ md: 12 }} />
          </Box>
          <Box paddingTop={{ base: 14, md: 'initial' }}>{children}</Box>
        </Box>
      </Box>
      <Stack
        spacing={5}
        height="100%"
        padding={8}
        backgroundColor="purple.600"
        display={{ base: 'none', md: 'block' }}
      >
        <Box color="gray.300">
          <Text as="h2" fontSize="2xl" fontWeight="bold">
            Keep track of the progress on your job applications!
          </Text>
          <Text>
            Getting a job can be tough, tracking your applications should not.
          </Text>
        </Box>
        <Stack spacing={12}>
          <ContentLayout
            image={typing}
            title="Add new job applications"
            description="Be consistent. Send your job applications and keep track of the
                applications you sent. You can add and view job applications
                anywhere and at anytime on TrackOpp."
          />
          <ContentLayout
            bg
            image={plan}
            title="Change job application state"
            description="Before getting a job, there are different stages you undergo.
                You can change the state of the job application between
                Reviewing, Interview, Offer, A Match and Not a Match as you
                progress through the job application stages."
          />
          <ContentLayout
            image={interview}
            title="Stay Organized"
            description="You can increase your productivity by being organized, you will
                save time looking for things and will have more time to work on
                important tasks like sending out new applications."
          />
        </Stack>
      </Stack>
    </Grid>
  );
};

export default AuthPageLayout;
