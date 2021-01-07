import { exec, spawn } from 'child_process';
import { singleton } from 'tsyringe';

@singleton()
class BashService {
  /**
   * Executes a bash command, use when expecting simple string result
   * When expecting stream result, use `spawnCommand`
   * @param {string} command - Command to be executed, includes arguments if necessary
   */
  execCommand(command: string) {
    return new Promise<string>((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          return reject(error);
        }
        if (stderr) {
          return reject(stderr);
        }

        resolve(stdout);
      });
    })
  }

  /**
   * Executes a bash command, use when expecting stream result
   * When expecting simple string result, use `execCommand`
   * @param command - Command to be executed, without any arguments
   * @param args - Command arguments
   */
  spawnCommand(command: string, args?: string[]) {
    return new Promise<string>((resolve, reject) => {
      const proc = spawn(command, args);
      let result = '';
      let error = '';

      proc.stdout.on('data', data => result += data);
      proc.stderr.on('data', data => error += data);
      proc.on('error', err => error += err);
      proc.on('exit', code => {
        if (code === 0) {
          resolve(result);
        }
        else {
          reject(error);
        }
      });
    });
  }
}

export default BashService;
