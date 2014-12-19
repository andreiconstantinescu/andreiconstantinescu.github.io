'use strict'

var gulp = require('gulp');
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var argv = require('minimist')(process.argv.slice(2));

var gulpTasks = fs.readdirSync('./gulp');
_.each(files, function(file) {
  require('./gulp/' + file);
})

gulp.task('default', ['build']);
