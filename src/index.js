'use strict';

var generators = require('yeoman-generator'),
    mkdirp = require('mkdirp');



module.exports = generators.Base.extend({
  createProjectFileSystem: function() {
    var destRoot = this.destinationRoot(),
        sourceRoot = this.sourceRoot(),
        appDir = destRoot + '/app';


    mkdirp(appDir + '/scripts');
    mkdirp(appDir + '/img');
    mkdirp(appDir + '/css');
  

    this.fs.copy(sourceRoot + '/scripts/main.js', appDir + '/scripts/main.js');
    this.fs.copy(sourceRoot + '/css/main.css', appDir + '/css/main.css');
    this.fs.copy(sourceRoot + '/css/reset.css', appDir + '/css/reset.css');

    this.fs.copy(sourceRoot + '/humans.txt', appDir + '/humans.txt');
    this.fs.copy(sourceRoot + '/robots.txt', appDir + '/robots.txt');
    this.fs.copy(sourceRoot + '/bower.json', destRoot + '/bower.json');
    this.fs.copy(sourceRoot + '/README.md', destRoot + '/README.md');
    this.fs.copy(sourceRoot + '/.editorconfig', destRoot + '/.editorconfig');
    this.fs.copy(sourceRoot + '/.jshintrc', destRoot + '/.jshintrc');
    this.fs.copy(sourceRoot + '/.bowerrc', destRoot + '/.bowerrc');
  },
  installDependencies: function() {
    this.bowerInstall();
  }
});