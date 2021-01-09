import { Tr, Td, Stack, Button } from '@chakra-ui/react';
import { useMutation } from 'react-query';
import { ServiceAction, ServiceStatus } from '../../../../shared/models';
import { SuccessResponse } from '../../../../shared/responses';
import api from '../../api';
import PlayIcon from '../../icons/PlayIcon';
import ReloadIcon from '../../icons/ReloadIcon';
import StopIcon from '../../icons/StopIcon';

type ServiceListRowProps = ServiceStatus & {
  onAction?: (success: boolean) => void;
}

const ServiceListRow : React.FC<ServiceListRowProps> = ({ name, enabled, onAction }) => {
  const mutation = useMutation(api.services.action, {
    onSuccess: (res: SuccessResponse) => {
      onAction?.(res.success);
    }
  });

  return (
    <Tr key={name}>
      <Td>{name}</Td>
      <Td color={enabled ? 'green.500' : 'red.500'}>
        {enabled ? 'Running' : 'Stopped'}
      </Td>
      <Td>
        {enabled ? (
          <Stack direction="row" spacing={4}>
            <Button
              leftIcon={<StopIcon strokeWidth={3} />}
              color="white"
              bg="red.500"
              onClick={() => mutation.mutate({ serviceName: name, action: ServiceAction.Stop })}
            >
              Stop
            </Button>
            <Button
              leftIcon={<ReloadIcon strokeWidth={3} />}
              color="white"
              bg="blue.500"
              onClick={() => mutation.mutate({ serviceName: name, action: ServiceAction.Restart })}
            >
              Restart
            </Button>
          </Stack>
        ) : (
          <Button
            leftIcon={<PlayIcon strokeWidth={3} />}
            color="white"
            bg="green.500"
            onClick={() => mutation.mutate({ serviceName: name, action: ServiceAction.Start })}
          >
            Start
          </Button>
        )}
      </Td>
    </Tr>
  );
};

export default ServiceListRow;
