import { Box, Flex, Text, Link, Divider, IconProps } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import React from 'react';
import HomeIcon from '../icons/HomeIcon';
import ServicesIcon from '../icons/ServicesIcon';

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    Icon: HomeIcon,
    url: '/'
  },
  {
    title: 'Services',
    Icon: ServicesIcon,
    url: '/services'
  }
];

const Sidebar : React.FC = () => {
  const location = useLocation();
  const isCurrent = (item: NavItem) => location.pathname === item.url;

  return (
    <Box pt="10px">
      {navItems.map(item => (
        <Box key={item.url}>
          <Flex
            borderLeft={isCurrent(item) ? '5px solid' : 'none'}
            borderLeftColor="main"
            rounded="sm"
            color={isCurrent(item) ? 'main' : undefined}
            p="2px"
            my="5px"
          >
            <Link as={RouterLink} to={item.url} w="100%" roundedRight="sm">
              <Flex align="center" p="5px">
                <item.Icon boxSize={10}/>
                <Text ml="10px">{item.title}</Text>
              </Flex>
            </Link>
          </Flex>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;

interface NavItem {
  title: string;
  Icon: React.FC<IconProps>,
  url: string;
}