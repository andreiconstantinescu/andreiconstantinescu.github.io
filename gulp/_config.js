'use strict';

var path = require('path');

var config = module.exports = {};
cofig.plugins = require('gulp-load-plugins')();

config.paths = {
  'client': './client',
  'public': './public',
  'test': './test'
};

config.bowerGlobal = {
  'jquery': ['$', 'jQuery']
};

config.aliasify = {
  configDir: path.resolve(config.paths.client + '/js'),
  aliases: {
    'bower-components': './lib/bower-packages',
    'templates': './lib/templates'
  }
};

config.stylus = {
  'include css': true,
  'resolve url': true,
  'compress': true,
  'sourcemap': true
};

config.autoprefixer = [
  'ie >= 8',
  'ie_mob >= 9',
  'ff >= 30',
  'chrome >= 30',
  'safari >= 6',
  'opera >= 23',
  'ios >= 6',
  'android >= 2.3',
  'bb >= 9'
];
