import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import HomeIcon from '../icons/HomeIcon';

const Sidebar : React.FC = () => {
  return (
    <Box pt="10px">
      <Flex
        align="center"
        borderLeft="5px solid"
        borderLeftColor="main"
        rounded="sm"
        p="5px"
        color="main" // main color only for selected items
      >
        <HomeIcon boxSize={10}/>
        <Text ml="10px">Dashboard</Text>
      </Flex>
    </Box>
  );
};

export default Sidebar;
