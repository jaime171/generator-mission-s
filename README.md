
<p align="center">
  <img src="http://themissionjimmy.com/img/logo-header.svg" height="200">
</p>

# Yeoman Mission-s Generator


A generator for creating static sites using tools like [Pug](http://jade-lang.com/) and [Sass](http://sass-lang.com/).

#Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Setup](#setup)
- [Use](#use)
- [Arguments](#arguments)


## Features

- Preview with [Browsersync](https://www.browsersync.io/)
- Automated build process: compilation of preprocessors (Pug and Sass)



## Getting Started

This generator utilizes [Yeoman](http://yeoman.io/), [Gulp](http://gulpjs.com/) and [Bower](http://bower.io/) to scaffold out projects, run tasks and manage front-end dependencies.

#### Node.js

Check to see if you have Node installed, type `node -v`. if you don't have installed, navigate to [Node.js](https://nodejs.org/en/) website and install from there.


## Setup

To start a new project, you need to open up a terminal/command prompt, make a new directory, and navigate into it.

```
mkdir my-new-project
cd my-new-project
```

then, run Mission-s generator.

```
yo mission-s
```

Once everything is installed, you will see a project structure like this:

```
├── app/                       # Folder for all the source files
|   ├── dist                     # Folder for production build
|   |   ├── css                    # Compiled css
|   |   ├── img                    # All your img
|   |   ├── scripts                # JS scripts
|   |   ├── favicon
|   |   ├── humans.txt
|   |   ├── robots.txt
|   |   └── index.html             # Compiled pug
|   ├── pug                      # Pug modules
|   └── sass                     # Sass modules
|                   
├── .bowerrc
├── .editorconfig
├── .jshintrc
├── .yo-rc.json
├── bower.json                 # Dependencies configuration
├── gulpfile.js                # Gulp task configuration
├── package.json               # DevDependencies and site/folder configuration
└── README.md                  # Readme file
```


## Use

Run `gulp` to build all your pug and sass files, and also it will open a local server.


## Build

Run `gulp build` to minify and compress all your css, js and images.


## Arguments

`yo mission-s scss` Use SCSS syntax instead of SASS.

## License

MIT © [Jaime Simental](http://themissionjimmy.com/)
