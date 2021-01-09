import { Stack } from '@chakra-ui/react';
import { useMutation } from 'react-query';
import { PowerAction } from '../../../../shared/models';
import api from '../../api';
import PowerIcon from '../../icons/PowerIcon';
import ReloadIcon from '../../icons/ReloadIcon';
import ConfirmButton from '../ConfirmButton';

const PowerControls : React.FC = () => {
  const mutation = useMutation(api.system.power);

  return (
    <>
      <Stack direction="row" spacing={4}>
        <ConfirmButton
          leftIcon={<PowerIcon strokeWidth={3} />}
          color="white"
          bg="red.500"
          onClick={() => mutation.mutate(PowerAction.Shutdown)}
        >
          Shutdown
        </ConfirmButton>
        <ConfirmButton
          leftIcon={<ReloadIcon strokeWidth={3} />}
          color="white"
          bg="blue.500"
          onClick={() => mutation.mutate(PowerAction.Reboot)}
        >
          Reboot
        </ConfirmButton>
      </Stack>
    </>
  );
};



export default PowerControls;
