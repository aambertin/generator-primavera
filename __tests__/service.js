'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-primavera:service', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/service'))
      .withPrompts({service: 'my service'});
  });

  it('creates files', () => {
    assert.file([
      'src/my-service.service.js'
    ]);
  });
});
