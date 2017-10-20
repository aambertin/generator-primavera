'use strict';
const Subgenerator = require('../subgenbase')

module.exports = class extends Subgenerator {
  constructor(...args) {
    super(...args)
    this.component = 'component'
  }

  prompting() {
    return super.prompting()
  }

  writing() {
    return super.writing()
  }
}