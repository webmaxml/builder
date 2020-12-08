const path = require( 'path' );
const { ESLint } = require("eslint");
const paths = require('./classes/Paths');
const eslint = require('./classes/Eslint');

(async function main() {
  // 1. Create an instance.
  const eslint = new ESLint({
    overrideConfigFile: path.resolve(__dirname, '../configs/.eslintrc.json')
  });

  // 2. Lint files.
  const results = await eslint.lintFiles([path.resolve( process.cwd(), 'src/ts/index.ts' )]);

  // 3. Format the results.
  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);

  // 4. Output it.
  console.log(resultText);
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});