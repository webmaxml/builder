import * as path from 'path';

class PathHandler {
  private configRoot: string = path.resolve(__dirname, '../../configs');
  private clientRoot: string = path.resolve(process.cwd());

  getConfigPath(file: string): string {
    return path.resolve(this.configRoot, file);
  }

  getClientPath(file: string): string {
    return path.resolve(this.clientRoot, file);
  }
}

const pathHandler: PathHandler = new PathHandler();
export default pathHandler;
