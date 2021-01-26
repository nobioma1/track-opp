import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  Avatar,
  Text,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { MdArrowDropDown, MdDashboard, MdBook } from 'react-icons/md';
import { BiLogOut, BiMenuAltRight, BiUser } from 'react-icons/bi';
import './nav.css';

import { useAuthContext, useFirebaseContext } from 'hooks';

type NavMenuProps = {
  isVisible: boolean;
};

type MenuProps = {
  logOut(): void;
};

type UserProps = {
  mobile?: boolean;
};

const menuItems = [
  { title: 'Dashboard', to: '/dashboard', Icon: MdDashboard },
  { title: 'Applications', to: '/applications', Icon: MdBook },
  { title: 'Profile', to: '/profile', Icon: BiUser },
];

const centerNavItems = menuItems.slice(0, 2);
const subNavItems = menuItems.slice(2);

const User: React.FC<UserProps> = ({ mobile }) => {
  const { user } = useAuthContext();
  return (
    <Stack
      isInline
      alignItems="center"
      width="100%"
      justifyContent={mobile ? 'space-between' : 'initial'}
    >
      <Box textAlign={mobile ? 'left' : 'right'}>
        <Text textTransform="capitalize" maxWidth={120} isTruncated>
          {user?.firstName}
        </Text>
        <Text fontSize="sm" fontWeight={300} maxWidth={120} isTruncated>
          {user?.email}
        </Text>
      </Box>
      <Avatar
        name={`${user?.firstName} ${user?.lastName}`}
        src={user?.photoURL || ''}
        size="sm"
        marginLeft={4}
      />
    </Stack>
  );
};

const MobileNavMenu: React.FC<MenuProps> = ({ logOut }) => {
  return (
    <Menu autoSelect={false}>
      <MenuButton
        as={IconButton}
        icon={<BiMenuAltRight size="25px" color="#805AD5" />}
        variant="ghost"
        aria-label="menu"
        size="sm"
      />
      <MenuList>
        <Flex paddingX={5}>
          <User mobile />
        </Flex>
        <MenuDivider />
        {centerNavItems.map(({ Icon, ...item }, idx) => (
          <NavLink
            to={item.to}
            key={`${item.title}-${idx}`}
            className="nav-link"
          >
            <MenuItem icon={<Icon size="18px" />}>{item.title}</MenuItem>
          </NavLink>
        ))}
        <MenuDivider />
        {subNavItems.map(({ Icon, ...item }, idx) => (
          <NavLink
            to={item.to}
            key={`${item.title}-${idx}`}
            className="nav-link"
          >
            <MenuItem icon={<Icon size="18px" />}>{item.title}</MenuItem>
          </NavLink>
        ))}
        <MenuItem
          onClick={logOut}
          color="red.500"
          icon={<BiLogOut size="18px" />}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const MainNavMenu: React.FC<MenuProps> = ({ logOut }) => {
  return (
    <Flex alignItems="center" flex={1} justifyContent="space-between">
      <Flex alignItems="center" flex={1} justifyContent="center">
        {centerNavItems.map(({ Icon, ...item }, idx) => (
          <NavLink
            to={item.to}
            key={`${item.title}-${idx}`}
            className="nav-link"
          >
            <Flex alignItems="center" flexDirection="column" paddingX={4}>
              <Stack alignItems="center" marginBottom={1} isInline>
                <Icon size="20px" />
                <Text>{item.title}</Text>
              </Stack>
              <Box width={2} height={2} className="dot" borderRadius="50%" />
            </Flex>
          </NavLink>
        ))}
      </Flex>
      <Menu autoSelect={false}>
        <MenuButton
          as={Button}
          variant="ghost"
          padding="5px"
          background="none"
          rightIcon={<MdArrowDropDown />}
          _focus={{ outline: 'none' }}
          _hover={{ backgroundColor: 'none' }}
        >
          <User />
        </MenuButton>
        <MenuList>
          {subNavItems.map(({ Icon, ...item }, idx) => (
            <NavLink
              to={item.to}
              key={`${item.title}-${idx}`}
              className="nav-link"
            >
              <MenuItem icon={<Icon size="18px" />}>{item.title}</MenuItem>
            </NavLink>
          ))}
          <MenuItem
            onClick={logOut}
            color="red.500"
            icon={<BiLogOut size="18px" />}
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

const NavMenu: React.FC<NavMenuProps> = ({ isVisible }) => {
  const { logOut } = useFirebaseContext();

  if (isVisible) {
    return <MobileNavMenu logOut={logOut} />;
  }

  return <MainNavMenu logOut={logOut} />;
};

export default NavMenu;
