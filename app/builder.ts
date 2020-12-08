#!/usr/bin/env ts-node

import eslint from './classes/Eslint';

(async function(){
  const result: string = await eslint.process('src/ts/index.ts');
  console.log(result);
})().catch((error: string) => {
  process.exitCode = 1;
  console.error(error);
});