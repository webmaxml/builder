const browserify = require('browserify');
const tsify = require('tsify');
const pathHandler = require('./PathHandler');

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