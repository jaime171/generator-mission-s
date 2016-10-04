'use strict';

var generators = require('yeoman-generator'),
    mkdirp = require('mkdirp'),
    yosay = require('yosay');



module.exports = generators.Base.extend({
  _createProjectFileSystem: function() {
    var destRoot = this.destinationRoot(),
        sourceRoot = this.sourceRoot(),
        appDir = destRoot + '/app',
        sassFileExtension = (this.sass) ? '.scss' : '.sass',
        templateContext = {
          appname : this.appname,
          appdescription : this.appdescription,
          appauthor : this.appauthor,
          appwebsite : this.appwebsite
        };


    mkdirp(appDir + '/sass');
    mkdirp(appDir + '/pug');
    mkdirp(appDir + '/dist/img');



    //Favicon
    this.fs.copy(sourceRoot + '/favicon.ico', appDir + '/dist/favicon.ico');

    // Script files
    this.fs.copy(sourceRoot + '/dist/scripts/main.js', appDir + '/dist/scripts/main.js');



    //Sass Files
    this.fs.copy(sourceRoot + '/sass/_helpers' + sassFileExtension, appDir + '/sass/_helpers' + sassFileExtension);
    this.fs.copy(sourceRoot + '/sass/_reset' + sassFileExtension, appDir + '/sass/_reset' + sassFileExtension);
    this.fs.copy(sourceRoot + '/sass/_variables' + sassFileExtension, appDir + '/sass/_variables' + sassFileExtension);
    this.fs.copy(sourceRoot + '/sass/_nav' + sassFileExtension, appDir + '/sass/_nav' + sassFileExtension);
    this.fs.copy(sourceRoot + '/sass/main' + sassFileExtension, appDir + '/sass/main' + sassFileExtension);



    this.fs.copy(sourceRoot + '/pug/index.pug', appDir + '/pug/index.pug');
    this.fs.copyTpl(sourceRoot + '/pug/base.pug', appDir + '/pug/base.pug', templateContext);
    this.fs.copy(sourceRoot + '/pug/nav.pug', appDir + '/pug/nav.pug');
    this.fs.copy(sourceRoot + '/pug/footer.pug', appDir + '/pug/footer.pug');

    //Gulpfile
    this.fs.copyTpl(sourceRoot + '/gulpfile.js', destRoot + '/gulpfile.js');



    this.fs.copyTpl(sourceRoot + '/humans.txt', appDir + '/dist/humans.txt', templateContext);
    this.fs.copy(sourceRoot + '/robots.txt', appDir + '/dist/robots.txt');



    this.fs.copy(sourceRoot + '/.editorconfig', destRoot + '/.editorconfig');
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
    this.argument('scss', {
      required: false,
      desc: "Use SCSS syntax insted of SASS"
    });
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
    this.npmInstall();
  }
});
