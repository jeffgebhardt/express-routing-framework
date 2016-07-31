'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = require('chai').expect;
const request = require('chai').request;
const serverPort = 9000;


describe('Express Routing', function() {
  var server;

  before((done) => {
    server = require('../_server');
    done();
  });

  after((done) => {
    server.close();
    done();
  });

  it('Should handle unregistered GET requests', function(done) {
    request('localhost:' + serverPort)
    .get('/api/undefinedRoute')
    .end(function(err){
      expect(err).to.have.status(400);
      done();
    });
  });

  it('Should handle registered GET requests', function(done) {
    request('localhost:' + serverPort)
    .get('/api/directory/dataGoesHere')
    .end(function(err, res){
      expect(res).to.have.status(200);
      done();
    });
  });

  it('Should handle registered POST requests', (done) => {
    request('localhost:' + serverPort)
      .post('/api/directory/')
      .send({
        id: 'test'
      })
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Should handle registered DELETE requests', function(done) {
    request('localhost:' + serverPort)
    .delete('/api/directory/dataGoesHere')
    .end(function(err, res){
      expect(res).to.have.status(200);
      done();
    });
  });
});
