import pathHandler from './PathHandler';
import { ESLint } from "eslint";

class Eslint {
  
  private eslint: ESLint  = new ESLint({
    overrideConfigFile: pathHandler.getConfigPath('.eslintrc.json')
  });

  private async lint(file: string): Promise<ESLint.LintResult[]> {
    return await this.eslint.lintFiles([pathHandler.getClientPath(file)]);
  }

  private async getFormatter(): Promise<ESLint.Formatter> {
    return await this.eslint.loadFormatter("stylish");
  }

  async process(file: string): Promise<string> {
    const result: ESLint.LintResult[] = await this.lint(file);
    const formatter: ESLint.Formatter = await this.getFormatter();

    return formatter.format(result);
  }
}

const eslint: Eslint = new Eslint();
export default eslint;
