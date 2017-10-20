'use strict';
const Generator = require('yeoman-generator');

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z\-]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

module.exports = class Subgenerator extends Generator {

  // member -> component

  prompting() {
    const prompts = [{
      type: 'text',
      name: this.component,
      message: `Where should we put your new ${this.component}?`
    }];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    var file = this.props[this.component].replace(/([a-z])([A-Z])/g, '$1-$2')
                  .toLowerCase()
                  .replace(/([ ])/g, '-')
                  .toLowerCase()

    const hypened = file.substring(file.lastIndexOf('/')+1)
    const camel = camelize(hypened).replace(/-/g,'')
    const pascal = `${camel.substring(0,1).toUpperCase()}${camel.substring(1)}`

    this.fs.copyTpl(
      this.templatePath(`${this.component}.template.js`),
      this.destinationPath(`src/${file}.${this.component}.js`),
      { hypened, camel, pascal }
    );
  }

  install() {
    // this.installDependencies();
  }
};
