'use strict';

angular.module('stravamapsApp')
  .factory('Activities', function ( $resource ) {
    return $resource('/api/strava/:accessToken', {}, {
      get: {method:'GET', isArray:true}
     });
  });
