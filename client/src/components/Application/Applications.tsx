import { useState, useRef } from 'react';
import {
  InputGroup,
  Input,
  InputRightElement,
  Text,
  Stack,
  Tabs,
  Tab,
  TabList,
  Button,
  Tag,
  Flex,
  useMediaQuery,
} from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';

import { Card } from 'components/Shared';
import { stages } from 'constants/variables';
import { useApplicationsContext } from 'hooks';
import NewApplicationButton from './NewApplicationButton';
import filterApplications from 'helpers/filterApplications';
import ApplicationsList from './ApplicationsList';

type NavItemProps = {
  tab: string;
  title: string;
  isActive: boolean;
  count: number;
  onClickFn(tab: string): void;
};

const NavItem: React.FC<NavItemProps> = ({
  tab,
  title,
  isActive,
  count,
  onClickFn,
}) => {
  return (
    <Button
      size="sm"
      isDisabled={!count}
      _focus={{ outline: 'none' }}
      onClick={() => onClickFn(tab)}
      variant={isActive ? 'solid' : 'ghost'}
      colorScheme={isActive ? 'purple' : 'gray'}
    >
      <Stack isInline alignItems="center">
        <Text>{title}</Text>
        <Tag size="sm">{count}</Tag>
      </Stack>
    </Button>
  );
};

const Applications = () => {
  const [active, setActive] = useState('jobsApplied');
  const [searchParam, setSearchParam] = useState('');
  const [useMobileList] = useMediaQuery('(max-width: 980px)');
  const btnRef = useRef(null);

  const { state } = useApplicationsContext();
  const { drawerOnOpen } = useApplicationsContext();

  const filteredApplications = filterApplications(
    state.applications,
    active,
    searchParam
  );

  const emptyText =
    active === 'jobsApplied' && !searchParam
      ? "You've not created any application, click on 'New Application' to create new."
      : `Cannot find any match for "${searchParam}" in "${stages[active]}".`;

  return (
    <Stack spacing={6} marginTop={2}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="md" fontWeight={600}>
          Applications
        </Text>
        <NewApplicationButton onOpen={drawerOnOpen} btnRef={btnRef} />
      </Flex>
      <Card>
        <Stack backgroundColor="#fff" width="100%">
          <Text>Filter applications</Text>
          <InputGroup>
            <Input
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
              focusBorderColor="purple.500"
              placeholder={`Filter applications in '${stages[active]}' stage`}
            />
            <InputRightElement children={<MdSearch />} />
          </InputGroup>
        </Stack>
      </Card>
      {!useMobileList ? (
        <Card>
          <Tabs colorScheme="purple">
            <TabList mb="1em">
              {Object.entries(stages).map(([key, title]) => (
                <Tab
                  key={key}
                  // isselected={active === key}
                  _focus={{ outline: 'none' }}
                  //@ts-ignore
                  isDisabled={!state.counts[key]}
                  onClick={() => setActive(key)}
                >
                  <Stack isInline alignItems="center">
                    <Text>{title}</Text>
                    <Tag size="sm">
                      {
                        //@ts-ignore
                        state.counts[key]
                      }
                    </Tag>
                  </Stack>
                </Tab>
              ))}
            </TabList>
            <Stack>
              <ApplicationsList
                applications={filteredApplications}
                emptyText={emptyText}
              />
            </Stack>
          </Tabs>
        </Card>
      ) : (
        <Stack>
          <Card>
            {Object.entries(stages).map(([key, title]) => (
              <NavItem
                key={key}
                tab={key}
                title={title}
                isActive={active === key}
                //@ts-ignore
                count={state.counts[key]}
                onClickFn={(tab) => setActive(tab)}
              />
            ))}
          </Card>
          <Card>
            <ApplicationsList
              applications={filteredApplications}
              emptyText={emptyText}
            />
          </Card>
        </Stack>
      )}
    </Stack>
  );
};

export default Applications;
