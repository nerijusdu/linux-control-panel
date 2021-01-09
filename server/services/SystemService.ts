import { autoInjectable, Lifecycle, scoped } from 'tsyringe';
import { PowerAction } from '../../shared/models';
import BashService from './BashService';

@autoInjectable()
@scoped(Lifecycle.ResolutionScoped)
class SystemService {
  constructor(private bashService?: BashService) { }

  async power(action: PowerAction) {
    const param = action === PowerAction.Reboot ? '-r' : '';
    await this.bashService?.execCommand(`shutdown ${param} now`);
  }
}

export default SystemService;
