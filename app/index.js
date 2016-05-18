'use strict';

var generators = require('yeoman-generator'),
    mkdirp = require('mkdirp'),
    yosay = require('yosay');



module.exports = generators.Base.extend({
  _createProjectFileSystem: function() {
    var destRoot = this.destinationRoot(),
        sourceRoot = this.sourceRoot(),
        appDir = destRoot + '/app',
        sassFileExtension = (this.sass) ? '.sass' : 'scss',
        templateContext = {
          appname : this.appname,
          appdescription : this.appdescription,
          appauthor : this.appauthor,
          appwebsite : this.appwebsite
        };


    mkdirp(appDir + '/scripts');
    mkdirp(appDir + '/img');
    mkdirp(appDir + '/sass');



    // Script files
    this.fs.copy(sourceRoot + '/scripts/main.js', appDir + '/scripts/main.js');



    //Sass Files
    this.fs.copy(sourceRoot + '/sass/_helpers' + sassFileExtension, appDir + '/sass/_helpers' + sassFileExtension);
    this.fs.copy(sourceRoot + '/sass/_reset' + sassFileExtension, appDir + '/sass/_reset' + sassFileExtension);
    this.fs.copy(sourceRoot + '/sass/_variables' + sassFileExtension, appDir + '/sass/_variables' + sassFileExtension);
    this.fs.copy(sourceRoot + '/sass/main' + sassFileExtension, appDir + '/sass/main' + sassFileExtension);


    //Index File
    this.fs.copy(sourceRoot + '/index.html', appDir + '/index.html');

    //Gulpfile
    this.fs.copyTpl(sourceRoot + '/gulpfile.js', destRoot + '/gulpfile.js');



    this.fs.copyTpl(sourceRoot + '/humans.txt', appDir + '/humans.txt', templateContext);
    this.fs.copy(sourceRoot + '/robots.txt', appDir + '/robots.txt');
    this.fs.copyTpl(sourceRoot + '/bower.json', destRoot + '/bower.json', templateContext);
    this.fs.copy(sourceRoot + '/README.md', destRoot + '/README.md');
    this.fs.copy(sourceRoot + '/.editorconfig', destRoot + '/.editorconfig');
    this.fs.copy(sourceRoot + '/.jshintrc', destRoot + '/.jshintrc');
    this.fs.copy(sourceRoot + '/.bowerrc', destRoot + '/.bowerrc');
    this.fs.copyTpl(sourceRoot + '/package.json', destRoot + '/package.json', templateContext);
  },
  _getPrompts: function() {
    var prompts = [
      {
        name    : 'name',
        message : 'What is your project name?',
        default : this.appname
      },
      {
        name    : 'description',
        message : 'What is the description of the project?',
        default : ''
      },
      {
        name    : 'author'  ,
        message : 'What is the author name?',
        default : ''
      },
      {
        name    : 'website'  ,
        message : 'What is your website?',
        default : ''
      }
    ];
    return prompts;
  },
  _saveAnswers: function(answers, callback) {
    this.appname = answers.name;
    this.appdescription = answers.description;
    this.appauthor = answers.author;
    this.appwebsite = answers.website;
    callback();
  },



  constructor: function() {
    generators.Base.apply(this, arguments);
    this.argument('sass');
  },

  initializing: function() {
    this.log(yosay('Welcome to mission-s generator for static websites'));
  },

  prompting: function () {
    var done = this.async();
    this.prompt(this._getPrompts(), function(answers){
      this._saveAnswers(answers, done);
    }.bind(this));
  },




  configuring: function() {
    this.config.save();
  },
  writing: function() {
    this._createProjectFileSystem();
  },
  install: function() {
    // this.bowerInstall();
    this.npmInstall();
    this.on('end', function() {
      this.spawnCommand('gulp');
    });
  }
});
