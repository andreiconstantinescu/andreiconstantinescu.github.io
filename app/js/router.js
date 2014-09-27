'use strict';

var Router = require('ampersand-router');
var $ = require('./shims/jquery');

var HomePage = require('./pages/home');

module.exports = Router.extend({
  routes: {
    '': 'home'
  },

  //Handlers
  home: function () {
    this.trigger('newPage', new HomePage({}));
    $('body').attr('data-page', 'home');
  }
});
