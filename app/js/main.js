var loadCSS = function (path) {
  var cb = function () {
    var l = document.createElement('link'); l.rel = 'stylesheet';
    l.href = path;
    var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
  };
  var raf = requestAnimationFrame || mozRequestAnimationFrame ||
      webkitRequestAnimationFrame || msRequestAnimationFrame;
  if (raf) {
    raf(cb);
  } else {
    window.addEventListener('load', cb);
  }
};

$(document).ready(function() {
  loadCSS('http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&subset=latin,latin-ext');
  loadCSS('css/main.css');

  var $body = $('body');

  $body.append("<p>Hello World!</p>");

});
