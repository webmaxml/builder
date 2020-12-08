import * as browserify from 'browserify';
import * as tsify from 'tsify';
import pathHandler from './PathHandler';

 
browserify()
    .add('main.ts')
    .plugin(tsify, { noImplicitAny: true })
    .bundle()
    .on('error', function (error) { console.error(error.toString()); })
    .pipe(process.stdout);

class Browserify {
  constructor() {

  }

  
}

module.exports = new Browserify();