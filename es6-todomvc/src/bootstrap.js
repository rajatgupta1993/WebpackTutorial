/* global app, $on */
(function(window) {
  'use strict'

  log("rajat1");

  $on(window, 'load', app.onLoad)
  $on(window, 'hashchange', app.onLoad)
})(window)
