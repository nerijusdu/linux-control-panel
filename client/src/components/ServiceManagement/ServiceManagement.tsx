import React from 'react';
import { Box, Divider, Flex, Heading, Spinner, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import api from '../../api';
import { ListResponse, ServiceStatus } from '../../../../shared/models';

const ServiceManagement: React.FC = () => {
  const { data, isLoading } = useQuery<ListResponse<ServiceStatus>>(api.services.keys.get, api.services.get);

  return (
    <Box>
      <Flex justify="space-between" align="center" w="100%" pr="10px">
        <Heading fontWeight="normal">Services</Heading>
        {isLoading && <Spinner />}
      </Flex>
      <Divider borderBottomColor="gray.300" my="10px" />
      <Table variant="simple" bg="white" boxShadow="md" borderRadius="lg" border="1px" borderColor="gray.200">
        <Thead>
          <Tr>
            <Th>Service</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.items.map(service => (
            <Tr key={service.name}>
              <Td>{service.name}</Td>
              <Td color={service.enabled ? 'green.500' : 'red.500'}>
                {service.enabled ? 'Running' : 'Stopped'}
              </Td>
              <Td></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ServiceManagement;
