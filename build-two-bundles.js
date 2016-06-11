var path = require("path");
var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('./', 'system.config.js');

builder
  .bundle('main - [app/**/*]', 'main.js')
  .then(() => builder.bundle('app - (app/**/*.js - [app/**/*.js])', 'app/app.js'))
  .then(function () {
    console.log('Build complete');
  })
  .catch(function (err) {
    console.log('Build error');
    console.log(err);
  });


//     return builder.bundle('main - [app/**/*]',		 +
//  -        `${this.outputPath}/main.js`, {		 +    return builder.bundle('main', `${this.outputPath}/main.js`, { minify: true })
//  -          minify: true		
//  -        })		
//  -      .then(() => builder.bundle('app - (app/**/*.js - [app/**/*.js])',		
//  -        `${this.outputPath}/app/index.js`, {		
//  -          minify: true		
//  -        }))