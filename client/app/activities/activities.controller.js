'use strict';

angular.module('stravamapsApp')
  .controller('ActivitiesCtrl', function ( $scope, Activities, uiGmapGoogleMapApi ) {
    $scope.polylines = [];
    // TODO: Make this dynamic
    $scope.map = {center: {latitude: 37.775110000000005, longitude: -122.44614000000001}, zoom: 12, bounds: {}};

    uiGmapGoogleMapApi.then(function( maps ) {
      Activities.get( function( activities ) {
        activities.forEach( function( activity, idx ) {
          var points = maps.geometry.encoding.decodePath( activity.map.summary_polyline ),
              serializedPoints = [];
          points.forEach( function( item ) {
            serializedPoints.push({
              latitude: item.k,
              longitude: item.C
            });
          });
          activity.map.path = serializedPoints;
          $scope.polylines.push({
            id: idx,
            path: serializedPoints,
            stroke: {
              color: '#FC4C02',
              weight: 2
            }
          });
        });
      });
    });
  });
