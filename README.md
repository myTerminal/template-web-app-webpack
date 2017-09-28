# template-web-webpack

[![Code Climate](https://codeclimate.com/github/myTerminal/template-web-webpack.png)](https://codeclimate.com/github/myTerminal/template-web-webpack)
[![bitHound Overall Score](https://www.bithound.io/github/myTerminal/template-web-webpack/badges/score.svg)](https://www.bithound.io/github/myTerminal/template-web-webpack)
[![bitHound Code](https://www.bithound.io/github/myTerminal/template-web-webpack/badges/code.svg)](https://www.bithound.io/github/myTerminal/template-web-webpack)  
[![Dependency Status](https://david-dm.org/myTerminal/template-web-webpack.svg)](https://david-dm.org/myTerminal/template-web-webpack)
[![devDependency Status](https://david-dm.org/myTerminal/template-web-webpack/dev-status.svg)](https://david-dm.org/myTerminal/template-web-webpack#info=devDependencies)
[![peer Dependency Status](https://david-dm.org/myTerminal/template-web-webpack/peer-status.svg)](https://david-dm.org/myTerminal/template-web-webpack#info=peerDependencies)  
[![License](https://img.shields.io/badge/LICENSE-GPL%20v3.0-blue.svg)](https://www.gnu.org/licenses/gpl.html)
[![Gratipay](http://img.shields.io/gratipay/myTerminal.svg)](https://gratipay.com/myTerminal)  

A template to create web applications on [Node.js](https://nodejs.org/) with [Webpack](https://webpack.js.org/) as the module-bundler

## Technologies

### Server

[Express](https://www.npmjs.com/package/express) as the web server with [body parser](https://www.npmjs.com/package/body-parser) to serve static resources.

### Client

#### Web Application

 - [React](https://facebook.github.io/react/)
 - [ReactDOM](https://facebook.github.io/react/docs/react-dom.html)
 - [Bootstrap 3](https://getbootstrap.com/docs/3.3/)
 - [jQuery](https://jquery.com/) as a dependency for Bootstrap
 - [ES2015](http://es6-features.org/)
 - [Less CSS](http://lesscss.org/)

#### Module bundler: Webpack

##### Plugins

 - [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin) to clean the output directory before every build
 - [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin) to copy static resources to the output directory
 - [extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin) to extract CSS stylesheets as a separate bundle to the output directory
 - [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) to inject entry-points into the startup html page to the output directory
 - [uglifyjs-webpack-plugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin) to minify JavaScript before bundling them to the output directory

##### Loaders

- [html-loader](https://www.npmjs.com/package/html-loader) to bundle html entry points
- [style-loader](https://www.npmjs.com/package/style-loader) to bundle CSS stylesheets
- [css-loader](https://www.npmjs.com/package/css-loader) to work with style-loader for bundling of CSS stylesheets
- [less-loader](https://www.npmjs.com/package/less-loader) to transpile Less CSS into regular CSS
- [file-loader](https://www.npmjs.com/package/file-loader) to work with other file types
- [babel-loader](https://www.npmjs.com/package/babel-loader) to perform babel transpilations with the help of supporting dependencies

##### Supporting dependencies

 - [babel-core](https://www.npmjs.com/package/babel-core), [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) to support babel-loader
 - [bable-preset-react](https://www.npmjs.com/package/babel-preset-react) to transpile JSX files to regular JavaScript files that web-browsers can interpret
 - [less](https://www.npmjs.com/package/less) to help less-loader with transpilation of Less CSS into regular CSS
 - [webpack-merge](https://www.npmjs.com/package/webpack-merge) to be able to use a common configuration across *dev* and *prod*
 - [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) to be able to live-reload the web-browser when run in *live* mode.

##### Commands

 - `npm run debug` to run Webpack with development configuration.  
 In this mode, Webpack generates source-maps for bundled JavaScript resources to simplify debugging of JavaScript in the web-browser.
 - `npm run develop` to run Webpack with development configuration and keep watching for file changes within source.  
 In this mode, Webpack generates source-maps for bundled JavaScript resources to simplify debugging of JavaScript in the web-browser.
 - `npm run live` to run Webpack with development configuration and keep watching for file changes within source and reload the web-browser on every change.  
 In this mode, Webpack generates source-maps for bundled JavaScript resources to simplify debugging of JavaScript in the web-browser and provides a live-development experience.  
 Please note that Express is not the web-server in this mode and hence any web-services implemented in "src\server\index.js" will not work.
 - `npm run build` to run Webpack with production configuration.  
 In this mode, Webpack minifies the JavaScript bundles and there are no source-maps created.
