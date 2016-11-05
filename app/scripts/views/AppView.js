/*global HealthTracker, Backbone, JST*/

HealthTracker.Views = HealthTracker.Views || {};

(function () {
  'use strict';

  HealthTracker.Views.AppView = Backbone.View.extend({

    el: '#main',

    events: {
      'click #search-btn': 'search'
    },

    initialize: function () {
      this.$input = this.$('#search-input');
    },

    search: function() {
      var data = {
        'query': this.$input.val()
      };
      var url = 'https://trackapi.nutritionix.com/v2/search/instant';

      $.ajax({
        url: url,
        type: 'GET',
        data: data,
        beforeSend: function(xhr) {
          xhr.setRequestHeader('x-app-id', '47901a6f');
          xhr.setRequestHeader('x-app-key', '');
        },
        success: function(result) {
          console.log(result)
        }
      });
    }

  });
})();
