'use strict';

var generators = require('yeoman-generator');

module.exports = generators.NamedBase.extend({
  method: function() {
    console.log(this.name);
  }
});