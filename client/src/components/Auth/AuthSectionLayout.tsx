import { Link } from 'react-router-dom';
import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Alert,
  AlertIcon,
  Link as UILink,
} from '@chakra-ui/react';

import { Feedback } from 'types';

interface FooterLinks {
  to: string;
  linkTitle: string;
}

type Props = {
  title: string;
  btnText: string;
  subText?: string;
  onSubmit(e: any): void;
  isLoading?: boolean;
  isDisabled?: boolean;
  feedback?: Feedback;
  footerSection?: React.ReactNode;
  footerLinks?: FooterLinks[];
};

const AuthSectionLayout: React.FC<Props> = ({
  children,
  title,
  subText,
  btnText,
  onSubmit,
  feedback,
  isLoading,
  isDisabled,
  footerSection,
  footerLinks,
}) => {
  return (
    <Stack spacing={4}>
      <Stack marginBottom={6}>
        <Heading as="h2" fontWeight="bold">
          {title}
        </Heading>
        {subText && <Text color="gray.600">{subText}</Text>}
      </Stack>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
      >
        <Stack spacing={4}>
          {feedback && (
            <Alert status={feedback.status}>
              <AlertIcon />
              {feedback.msg}
            </Alert>
          )}

          {children}
          <Button
            size="lg"
            type="submit"
            isLoading={isLoading}
            isDisabled={isDisabled}
            colorScheme="purple"
          >
            {btnText}
          </Button>
        </Stack>
      </form>
      {footerLinks && (
        <Stack alignItems="center">
          {footerLinks.map((link, idx) => (
            <UILink
              as={Link}
              key={`${idx}-${link.to}`}
              to={link.to}
              color="purple.600"
              width="fit-content"
            >
              {link.linkTitle}
            </UILink>
          ))}
        </Stack>
      )}
      {footerSection && (
        <Box>
          <Box
            as="hr"
            data-content="OR"
            lineHeight="1em"
            position="relative"
            outline={0}
            border={0}
            color="black"
            textAlign="center"
            height="1.5em"
            opacity={0.5}
            marginTop="20px"
            marginBottom="32px"
            _before={{
              content: "''",
              background:
                'linear-gradient(to right, transparent, #818078, transparent)',
              position: 'absolute',
              left: 0,
              top: '50%',
              width: '100%',
              height: '1px',
            }}
            _after={{
              content: 'attr(data-content)',
              position: 'relative',
              display: 'inline-block',
              color: 'black',
              padding: '0 0.5em',
              lineHeight: '1.5em',
              backgroundColor: 'white',
            }}
          />
          <Stack>{footerSection}</Stack>
        </Box>
      )}
    </Stack>
  );
};

export default AuthSectionLayout;
