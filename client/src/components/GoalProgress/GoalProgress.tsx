import React from 'react';
import {
  CircularProgress,
  Text,
  CircularProgressLabel,
} from '@chakra-ui/react';

import { useApplicationsContext } from 'hooks';
import SetGoal from './SetGoal';

type Props = {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
};

const GoalProgress: React.FC<Props> = ({ isOpen, onOpen, onClose }) => {
  const { dailyGoal, state } = useApplicationsContext();

  const todayScore = state.applications.filter((item) => {
    return new Date(item.timestamp).getDate() === new Date().getDate();
  }).length;

  return (
    <>
      <CircularProgress
        value={dailyGoal ? (todayScore / Number(dailyGoal)) * 100 : 0}
        size="85px"
        thickness="8px"
        color={
          dailyGoal && todayScore >= dailyGoal ? 'green.500' : 'purple.500'
        }
      >
        <CircularProgressLabel fontSize="sm">
          {dailyGoal ? (
            `${todayScore}/${dailyGoal}`
          ) : (
            <Text
              color="blue.400"
              textDecoration="underline"
              cursor="pointer"
              _hover={{ color: 'blue.600' }}
              onClick={onOpen}
            >
              set goal
            </Text>
          )}
        </CircularProgressLabel>
      </CircularProgress>
      <SetGoal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default GoalProgress;
