'use strict';

var assert = require('assert'),
    myFirstService = require('../../api/services/MyFirstService');

describe('The service MyFirstService', function() {
  it('should say hello I am the real service', function() {
    assert(myFirstService.sayHello(), 'Hello I am the real Service');
  });
});
