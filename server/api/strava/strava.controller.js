'use strict';

var _ = require('lodash'),
    strava = require('strava-v3');


exports.index = function(req, res) {
  strava.athlete.listActivities({per_page:100}, function( err, payload ) {
    if(err) { return handleError(res, err); }
    return res.json(200, payload);
  });
};


function handleError(res, err) {
  return res.send(500, err);
}
