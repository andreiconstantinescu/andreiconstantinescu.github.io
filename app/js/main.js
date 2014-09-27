'use strict';

var $ = require('./shims/jquery');
var _ = require('lodash');
var MainView = require('./views/main');
var Router = require('./router');
var loadcss = require('./lib/loadcss');

module.exports = {
  launch: _.once(function () {
    var self = window.app = this;

    //Initialize the URL handlers and history tracker.
    this.router = new Router();

    $(document).ready(function () {
      // Asynchronously load our main CSS file.
      loadcss('/css/main.css');
      loadcss('http://fonts.googleapis.com/css?family=Source+Sans+Pro:' +
      '300,400,600,300italic|Source+Serif+Pro:400,600&subset=latin,latin-ext');

      //Initialize the main view of the website.
      var mainView = self.view = new MainView({
        el: document.body
      });

      //Render it.
      mainView.render();

      //Listen for page changes from the router.
      self.route.on('newPage', mainView.setPage, mainView);

      var isLocal = false;
      if (window.location.host.indexOf('localhost') !== -1) {
        // Use non-pushState URLs for localhost dev for BrowserSync.
        isLocal = true;
      }
      var usePushState = !isLocal;

      // Start our router and show the appropriate page.
      // If start method returns false, it means the route was not found.
      if (!self.router.history.start({ pushState: usePushState, root: '/' })) {
        self.navigate('404');
      }
    });
  }),

  navigate: function (page) {
    var url = (page.charAt(0) === '/') ? page.slice(1) : page;
    this.router.history.navigate(url, { trigger: true });
  }
};

module.exports.launch();
