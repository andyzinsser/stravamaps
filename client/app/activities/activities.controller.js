'use strict';

angular.module('stravamapsApp')
  .controller('ActivitiesCtrl', function ( $scope, Activities, uiGmapGoogleMapApi ) {
    $scope.polylines = [];
    $scope.map = {};

    uiGmapGoogleMapApi.then(function( maps ) {
      Activities.get( function( activities ) {
        var bounds = {
          north: 0,
          east: 0,
          south: 0,
          west: 0
        };

        activities.forEach( function( activity, idx ) {
          var points = maps.geometry.encoding.decodePath( activity.map.summary_polyline ),
              serializedPoints = [];

         points.forEach( function( item ) {
            var serializedPoint = {
              latitude: item.k,
              longitude: item.C
            };
            serializedPoints.push( serializedPoint );
            bounds = includePointInBounds( bounds, serializedPoint );
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

        var verticalCenter = ( bounds.north + bounds.south ) / 2,
            horizontalCenter = ( bounds.west + bounds.east ) / 2;

        $scope.map = {
          center: {latitude: horizontalCenter, longitude: verticalCenter},
          // TODO: Figure out how to make this dynamic
          // TODO: Add simplify the styling of the map
          zoom: 8
        };
      });

      function includePointInBounds( bounds, point ) {
        if ( point.longitude > bounds.north || bounds.north == 0 ) {
          bounds.north = point.longitude;
        }
        if ( point.longitude < bounds.south || bounds.south == 0 ) {
          bounds.south = point.longitude;
        }
        if ( point.latitude > bounds.east || bounds.east == 0) {
          bounds.east = point.latitude;
        }
        if ( point.latitude < bounds.west || bounds.west == 0 ) {
          bounds.west = point.latitude;
        }
        return bounds;
      }
    });
  });
