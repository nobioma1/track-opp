import { useEffect, useRef } from 'react';
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { TimelineMax } from 'gsap';

import countboard from '../../assets/countboard.png';
import applications from '../../assets/applications.png';
import setup from '../../assets/setup.svg';
import { BsCheckCircle } from 'react-icons/bs';

const PageContent = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const { current: tl } = useRef(new TimelineMax());

  useEffect(() => {
    tl.from('.img', { scale: 0, y: 5 }, 1.5);

    if (!listRef.current) return;

    const vars = {
      y: 30,
      opacity: 0,
    };

    tl.from(listRef.current.children[0], { ...vars }, 2)
      .from(listRef.current.children[1], { ...vars }, '+=0.5')
      .from(listRef.current.children[2], { ...vars }, '+=0.5');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box position="relative">
      <Box
        className="img"
        marginBottom={6}
        boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
      >
        <Image src={countboard} alt="count board" borderRadius={5} />
      </Box>
      <Box
        className="img"
        marginBottom={6}
        boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
      >
        <Box>
          <Image src={applications} alt="applications" borderRadius={5} />
        </Box>
      </Box>
      <Box
        className="img"
        position="absolute"
        width={250}
        bottom={50}
        right={-50}
      >
        <Image src={setup} alt="list" width="100%" />
      </Box>
      <Stack ref={listRef}>
        {[
          'Add new job applications',
          'Change job application state',
          'Stay Organized',
        ].map((text, idx) => (
          <Flex alignItems="center" key={idx}>
            <BsCheckCircle />
            <Text ml={3} key={idx} fontSize="lg">
              {text}
            </Text>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
};

export default PageContent;
