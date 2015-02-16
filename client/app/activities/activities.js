'use strict';

angular.module('stravamapsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/activities/:stravaAccessToken', {
        templateUrl: 'app/activities/activities.html',
        controller: 'ActivitiesCtrl'
      });
  });
