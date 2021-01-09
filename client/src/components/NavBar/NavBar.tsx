import { Flex } from '@chakra-ui/react';
import React from 'react';
import PowerControls from './PowerControls';

const NavBar : React.FC = () => {
  return (
    <Flex justify="center">
      <PowerControls />
    </Flex>
  );
};

export default NavBar;
