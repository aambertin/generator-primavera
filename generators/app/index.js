'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
	prompting() {
		// Have Yeoman greet the user.
		this.log(yosay(
			'Welcome to the sublime ' + chalk.red('generator-primavera') + ' generator!'
		));

		const prompts = [{
			type: 'text',
			name: 'project',
			message: `What's your project name?`,
			default: 'primavera-app'
		}, {
      type: 'text',
      name: 'version',
      message:`What's the project version?`,
      default: '1.0.0'
    }];

		return this.prompt(prompts).then(props => {
			// To access props later use this.props.someAnswer;
			this.props = props;
		});
	}

	writing() {
    // this.props.
		this.fs.copyTpl(
			this.templatePath('**/*'),
			this.destinationPath(''),
      		this.props
		);
		this.fs.copyTpl(
			this.templatePath('.*'),
			this.destinationPath(''),
      		this.props
		);
	}

	install() {
		this.installDependencies();
	}
};