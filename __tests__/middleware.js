'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-primavera:middleware', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/middleware'))
      .withPrompts({middleware: 'my middleware'});
  });

  it('creates files', () => {
    assert.file([
      'src/my-middleware.middleware.js'
    ]);
  });
});
