#!/usr/bin/env node

const chokidar = require('chokidar');
const { program } = require('commander');
const chalk = require('chalk');
const { exec } = require('child_process');

program
  .version('0.1.0')
  .option('-C, --chdir <path>', 'change the working directory')
  .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
  .option('-T, --no-tests', 'ignore test hook');

program
  .command('setup [env]')
  .description('run setup commands for all envs')
  .option("-s, --setup_mode [mode]", "Which setup mode to use")
  .action(function(env, options){
    const mode = options.setup_mode || "normal";
    env = env || 'all';
    console.log(chalk.bold.green(`setup for ${env} env(s) with ${mode} mode`));
  });

program
  .command('watch <folder>')
  .description('watch files from given folder')
  .option("-e, --exec_mode <mode>", "Which exec mode to use")
  .action(function(folder, options){
    console.log(`Watching for file changes in ${folder}`);

    chokidar.watch(folder).on('change', (path) => {
      console.log(path);
      exec('npm run check', (error, stdout, stderr) => {
        console.log(chalk.green(stdout));
        if (error) {
          console.log(chalk.red(error));
          return;
        }
        console.log(chalk.yellow(stderr));
      });
    });
  });

program.parse(process.argv);