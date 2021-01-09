import { Box, Divider, Flex, Heading, IconButton, Spinner, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import api from '../../api';
import { ServiceStatus } from '../../../../shared/models';
import { ListResponse } from '../../../../shared/responses';
import ServiceListRow from './ServiceListRow';
import ReloadIcon from '../../icons/ReloadIcon';

const ServiceManagement: React.FC = () => {
  const { data, isLoading, refetch } = useQuery<ListResponse<ServiceStatus>>(
    api.services.keys.get,
    api.services.get);

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
            <ServiceListRow
              key={service.name}
              onAction={() => refetch()}
              {...service}
            />
          ))}
        </Tbody>
      </Table>
      <IconButton
        aria-label="Refresh"
        title="Refresh"
        icon={<ReloadIcon strokeWidth={3} boxSize={7} />}
        size="lg"
        pos="fixed"
        right="20px"
        bottom="20px"
        color="white"
        bg="green.500"
        onClick={() => refetch()}
        isLoading={isLoading}
      >
      </IconButton>
    </Box>
  );
};

export default ServiceManagement;
