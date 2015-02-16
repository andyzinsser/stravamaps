'use strict';

angular.module('stravamapsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/activities', {
        templateUrl: 'app/activities/activities.html',
        controller: 'ActivitiesCtrl'
      });
  });
