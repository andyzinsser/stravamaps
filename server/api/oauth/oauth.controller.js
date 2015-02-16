'use strict';

var _ = require('lodash'),
    request = require('request');


exports.index = function(req, res) {

  // TODO: Move these to environment variables
  var postData = {
    client_id: '4761',
    client_secret: '035c00415efb594cd2f7a3ebcd1d1e2a68b7a8c3',
    code: req.query.code
  }

  request.post({url:'https://www.strava.com/oauth/token', form:postData, json:true}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.redirect('/activities/' + response.body.access_token);
    } else {
      console.log("Token Retrieval Error:");
      console.log(error);
      // TODO: Handle oauth errors
      res.redirect('/');
    }
  });
};
