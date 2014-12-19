'use strict';

var config = require('./_config');
var $ = config.plugins;
var paths = config.paths;

var _ = require('lodash');
var when = require('when');
var nodefn = require('when/node');

var path = require('path');
var fs = require('fs-extra');

var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var vinylBuffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

var penthouse = require('penthouse');
var templatizer = require('templatizer');
var mainBowerFiles = require('main-bower-files');
var browserSync = require('browser-sync');
var useref = require('node-useref');
var StreamQueue = require('streamqueue');

var browserify = require('browserify');
var istanbul = require('browserify-istanbul');
var debowerify = require('debowerify');
var deamdify = require('deamdify');
var aliasify = require('aliasify');

// Js Files

// Generate Js functions from Jade templates
gulp.task('templates', function() {
  var templates = templatizer(path.client + '/templates', null, {});
  return nodefn.call(fs.mkdirp, paths.client + '/js/lib').then(function() {
    return nodefn.call(fs.writeFile, paths.client + '/js/lib/templates.js', templates);
  });
});

gulp.task('js:bower-components', function() {
  var packages = {};

  _.each(mainBowerFiles({
    filter: '**/*.js',
  }), function (file) {
    file = path.relative(paths.client + '/bower_components', file);
    packages[file.split('/')[0]] = true;
  });

  console.log(packages);
});
