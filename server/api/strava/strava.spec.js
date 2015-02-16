'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/strava/xxx', function() {

  it('should respond with an Object', function(done) {
    request(app)
      .get('/api/strava/xxx')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        done();
      });
  });
});
