
<p align="center">
  <img src="http://missionjimmy.com/images/logo-v2.svg" height="200">
</p>

# Yeoman Mission-s Generator


A generator for creating static sites. Using tools like: [Pug](http://jade-lang.com/) and [Sass](http://sass-lang.com/).

#Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Setup](#setup)
- [Arguments](#arguments)


## Features

- Previe with [Browsersync](https://www.browsersync.io/)
- Automated build process: copliation of preprocessors(Pug and Sass)


## Getting Started

This generator utilizes [Yeoman](http://yeoman.io/), [Gulp](http://gulpjs.com/) and [Bower](http://bower.io/) to scaffold out projects, run tasks and manage front-end dependencies.

#### Node.js

Check to see if you have Node installed, type `node -v`. if you don't have installed, navigate to [Node.js](https://nodejs.org/en/) website and isntall from there.


## Setup

To start a new project, you need to open up a terminal/command prompt, make a new directory, and navigate into it.

```
mkdir my-new-project 
cd my-new-project
```

the, run Mission-s generator.

```
yo mission-s
```

Once everything is installed, you will see a project structure like this:

```
├── app/                       # Folder for all the source files
|   ├── dist                 
|   ├── pug
|   ├── sass
|   ├── scripts
|   ├── scripts


├── node_modules/              # Folder for all node modules
├── src
|   ├── _data                  # JSON/YAML files that add data to templates
|   ├── _images                # Images
|   ├── _layouts               # Layout structure for app
|   |   └── base.jade
|   ├── _modules               # Reusable modules
|   |   └── link
|   |       ├── __tests__
|   |       |   └── link.spec.js
|   |       ├── link.jade
|   |       ├── link.js
|   |       └── link.scss
|   ├── _styles               # Global styles, mixins, variables, etc
|   |   └── main.scss         # Main stylesheet (import everything to this file)
|   ├── _scripts              # Global scripts, base classes, etc
|   |   └── main.js           # Main bootstrap file
|   ├── fonts                 # Fonts (Example, will not be generated)
|   ├── index.jade            # Homepage template
|   ├── favicon.ico
|   └── robots.txt
├── gulpfile.js               # Gulp task configuration
└── package.json              # Dependencies and site/folder configuration
```


## Arguments

`yo mission-s scss` Use SCSS syntax insted of SASS

