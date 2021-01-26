import React, { useState } from 'react';
import {
  Box,
  Wrap,
  Stack,
  Flex,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuOptionGroup,
  useDisclosure,
} from '@chakra-ui/react';
import {
  MdSettings,
  MdTimelapse,
  MdCheckBoxOutlineBlank,
} from 'react-icons/md';
import { BsCheckBox } from 'react-icons/bs';

import CountItem from './CountItem';
import { Card } from 'components/Shared';
import { useApplicationsContext } from 'hooks';
import { stages } from 'constants/variables';
import NewApplicationButton from 'components/Application/NewApplicationButton';
import GoalProgress from '../GoalProgress/GoalProgress';

type Props = {
  onOpen(): void;
};

const DEFAULT_COUNT_ORDER = Object.keys(stages).map((key) => ({
  key,
  isSelected: true,
}));

const CountBoard: React.FC<Props> = ({ onOpen }) => {
  const setGoalDisclosure = useDisclosure();
  const { state } = useApplicationsContext();
  const [orderedCount, setOrderedCount] = useState(DEFAULT_COUNT_ORDER);

  return (
    <Card>
      <Stack spacing={4}>
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="md" fontWeight={600}>
            Overview
          </Text>
          <Stack isInline>
            <NewApplicationButton onOpen={onOpen} />
            <Box>
              <Menu closeOnSelect={false}>
                <MenuButton
                  as={IconButton}
                  size="sm"
                  variant="outline"
                  colorScheme="purple"
                  icon={<MdSettings />}
                  aria-label="count settings"
                />
                <MenuList>
                  <MenuItem
                    icon={<MdTimelapse size="18px" />}
                    onClick={setGoalDisclosure.onOpen}
                  >
                    Set daily goal
                  </MenuItem>
                  <MenuDivider />
                  <MenuOptionGroup>
                    {orderedCount.map(({ key, isSelected }) => (
                      <MenuItem
                        icon={
                          isSelected ? (
                            <BsCheckBox size="18px" />
                          ) : (
                            <MdCheckBoxOutlineBlank size="18px" />
                          )
                        }
                        key={key}
                        value={key}
                        onClick={() =>
                          setOrderedCount((prev) =>
                            prev.map((item) => {
                              if (item.key === key) {
                                return { ...item, isSelected: !isSelected };
                              }
                              return item;
                            })
                          )
                        }
                      >
                        {stages[key]}
                      </MenuItem>
                    ))}
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </Box>
          </Stack>
        </Flex>

        <Flex justifyContent="center">
          <Wrap spacing={6} alignItems="space-between">
            <CountItem title="Today's Goal">
              <GoalProgress {...setGoalDisclosure} />
            </CountItem>
            {orderedCount
              .filter((item) => item.isSelected)
              .map(({ key }) => (
                <CountItem
                  key={key}
                  title={stages[key]}
                  // @ts-ignore
                  count={String(state.counts[key])}
                />
              ))}
          </Wrap>
        </Flex>
      </Stack>
    </Card>
  );
};

export default CountBoard;
