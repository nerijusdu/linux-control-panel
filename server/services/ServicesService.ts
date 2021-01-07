import { autoInjectable, Lifecycle, scoped } from "tsyringe";
import BashService from "./BashService";
import { ServiceStatus } from '../../shared/models';

const serviceRegex = /\s*\[\s{0,1}([+-])\s{0,1}\]\s*(.+)/;

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
}

export default ServicesService;
