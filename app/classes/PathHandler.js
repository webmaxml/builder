const path = require( 'path' );

class PathHandler {
  constructor() {
    this.configRoot = path.resolve(__dirname, '../../configs');
    this.clientRoot = path.resolve(process.cwd());
  }

  getConfigPath(file) {
    return path.resolve(this.configRoot, file);
  }

  getClientPath(file) {
    return path.resolve(this.clientRoot, file);
  }
}

const pathHandler = new PathHandler();

module.exports = pathHandler;
