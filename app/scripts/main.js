var app = app || {};

$(function() {

  'use strict';

  app.HealthTracker = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
      console.log('Hello from Backbone!');
    }
  };

  $(document).ready(function () {
    app.HealthTracker.init();
  });

})();

