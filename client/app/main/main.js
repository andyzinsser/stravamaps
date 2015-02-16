'use strict';

angular.module('stravamapsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html'
      });
  });
