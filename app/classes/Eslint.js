const pathHandler = require('./PathHandler');
const { ESLint } = require("eslint");

class Eslint {
  constructor() {
    this.eslint = new ESLint({
      overrideConfigFile: pathHandler.getConfigPath('.eslintrc.json')
    });
  }

  async lint(file) {
    return await this.eslint.lintFiles([pathHandler.getClientPath(file)]);
  }

  async getFormatter() {
    return await this.eslint.loadFormatter("stylish");
  }

  async process(file) {
    const result = await this.lint(file);
    const formatter = await this.getFormatter();

    return formatter.format(result);
  }
}

const e = new Eslint();
module.exports = e;
