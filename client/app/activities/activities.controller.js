'use strict';

angular.module('stravamapsApp')
  .controller('ActivitiesCtrl', function ( $scope, Activities, uiGmapGoogleMapApi ) {
    uiGmapGoogleMapApi.then(function( maps ) {

      Activities.get( function( activities ) {
        activities.forEach( function( activity ) {
          var points = maps.geometry.encoding.decodePath( activity.map.summary_polyline ),
              serializedPoints = [];
          points.forEach( function( item ) {
            serializedPoints.push({
              latitude: item.k,
              longitude: item.C
            });
          });
          activity.map.path = serializedPoints;
        });

        $scope.activities = activities;

        var path = [
          {
            latitude: 37.775110000000005,
            longitude: -122.44614000000001
          },
          {
            latitude: 30,
            longitude: -89
          },
          {
            latitude: 37,
            longitude: -122
          },
          {
            latitude: 60,
            longitude: -95
          }
        ];

        // console.log("ACTIVITY_PATH:");
        // console.log(activityPath);

        // console.log("PATH:");
        // console.log(path);


        // Figure out where the center should be?
        $scope.map = {center: {latitude: 37.775110000000005, longitude: -122.44614000000001}, zoom: 12, bounds: {}};
        $scope.polylines = [
          {
            id: 1,
            path: $scope.activities[1].map.path,
            stroke: {
              color: '#6060FB',
              weight: 2
            }
            // editable: true,
            // draggable: true,
            // geodesic: true,
            // visible: true,
            // icons: [{
            //   icon: {
            //     path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW
            //   },
            //   offset: '25px',
            //   repeat: '50px'
            // }]
          }
        ];

      });
    });
  });
