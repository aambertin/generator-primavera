'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-primavera:component', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withPrompts({component: 'my component'});
  });

  it('creates files', () => {
    assert.file([
      'src/my-component.component.js'
    ]);
  });
});
