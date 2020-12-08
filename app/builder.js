const eslint = require('./classes/Eslint');

(async function(){
  const result = await eslint.process('src/ts/index.ts');
  console.log(result);
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});