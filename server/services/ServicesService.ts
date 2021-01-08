import { autoInjectable, Lifecycle, scoped } from "tsyringe";
import BashService from "./BashService";
import { ServiceAction, ServiceStatus } from '../../shared/models';

const serviceRegex = /\s*\[\s{0,1}([+-])\s{0,1}\]\s*(.+)/;
const serviceActionRegex = /\[\s{0,1}(.+)\s{0,1}\]/;

@autoInjectable()
@scoped(Lifecycle.ResolutionScoped)
class ServicesService {
  constructor(private bashService?: BashService) { }

  async getActiveServices(): Promise<ServiceStatus[] | undefined> {
    const res = await this.bashService?.spawnCommand('service', ['--status-all']);
    const services = res?.split('\n')
      .map(line => line.match(serviceRegex))
      .filter(matches => matches && matches.length >= 3)
      .map(matches => ({
        name: matches![2],
        enabled: matches![1] === '+'
      }) as ServiceStatus);

    return services;
  }

  async action(serviceName: string, action: ServiceAction) {
    const res = await this.bashService?.spawnCommand(
      'service',
      [serviceName, action.toString()]);

    const match = res?.match(serviceActionRegex);
    if (!match || match.length < 2) return false;

    if (match[1].toLowerCase() === 'ok') return true;
    return false;
  }
}

export default ServicesService;
