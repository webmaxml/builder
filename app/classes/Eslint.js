const paths = require('./Paths');

class Eslint {
  constructor() {
    console.log(__filename);
    this.paths = paths;
  }
}

const e = new Eslint();

module.exports = e;
