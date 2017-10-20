'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-primavera:app', () => {
	beforeAll(() => {
		return helpers.run(path.join(__dirname, '../generators/app'))
			.withPrompts({ project: 'project-name', version: '1.0.0' });
	});

	it('creates files', () => {
		assert.file([
			'package.json',
			'config/serverless.yaml'
		]);
		assert.fileContent('package.json', /\"name\"\: \"project-name\"/)
		assert.fileContent('config/serverless.yaml', /^service\: project-name/)
		assert.fileContent('config/serverless.yaml', /project-name\:/)
	});
});