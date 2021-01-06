import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import NavBar from './NavBar';
import Sidebar from './Sidebar';

const BasicLayout : React.FC = ({ children }) => {
  return (
    <Grid
      minH="100vh"
      bgColor="background"
      templateColumns="200px auto"
      templateRows="70px auto"
    >
      <GridItem colSpan={2} bg="white" boxShadow="md" p="10px" zIndex="10">
        <NavBar />
      </GridItem>
      <GridItem bg="white" boxShadow="4px 0px 6px -1px rgba(0, 0, 0, 0.1)" my="20px" rounded="2xl">
        <Sidebar />
      </GridItem>
      <GridItem p="20px">{children}</GridItem>
    </Grid>
  );
};

export default BasicLayout;
