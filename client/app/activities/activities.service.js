'use strict';

angular.module('stravamapsApp')
  .factory('Activities', function ( $resource ) {
    return $resource('/api/strava/', {}, {
      get: {method:'GET', isArray:true}
     });
  });
