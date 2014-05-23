'use strict';

var Sails = require('sails'),
    sinon = require('sinon'),
    assert = require('assert');

describe('The TestingServices Controller', function() {

  // app and testingServicesController 
  var app,
      testingServicesController;

  // Global before hook
  before(function beforeControllerTest(done) {

    // Lift Sails and start the server
    Sails.lift({

      log: {
        level: 'error'
      },

    }, function(err, sails) {
      app = sails;

      // TestingServices controller
      testingServicesController = app.controllers.testingservices;

      done(err, sails);
    });
  });

  after(function afterControllerTest(done){
    app.lower(done);
  });

  describe('when we invoke the index action', function() {

    before(function() {
      // Mocking our service
      sinon.stub(app.services.myfirstservice, 'sayHello', function() {
        return 'Hello I am the mocked Service';
      });
    });

    after(function() {
      // Restores our mock to the original service
      app.services.myfirstservice.sayHello.restore();
    });

    it('should have called mocked service', function() {

      // JSON object spy
      var send = sinon.spy();

      // Executes controller action
      testingServicesController.index(null, {
        'send': send
      });



      // Makes sure the mocked service was called instead of the real one
      assert(send.called);
      assert(send.calledWith('Our service has a message for you: Hello I am the mocked Service'));
    });

  });
});
