'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-primavera:endpoint', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/endpoint'))
      .withPrompts({endpoint: 'my endpoint'});
  });

  it('creates files', () => {
    assert.file([
      'src/my-endpoint.endpoint.js'
    ]);
  });
});
