var HealthTracker = HealthTracker || {};

(function() {

  'use strict';

  HealthTracker = {
    Views: {},
    init: function () {
      console.log('Hello from Backbone!');
      new HealthTracker.Views.AppView();
    }
  };

  $(document).ready(function () {
    HealthTracker.init();
  });

})();

