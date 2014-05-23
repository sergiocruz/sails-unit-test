'use strict';

/**
 * TestingServicesController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var TestingServicesController = {

  index: function(req, res) {

    // Gets hello message from service
    var helloMessage = MyFirstService.sayHello();

    // Returns hello message to screen
    res.send('Our service has a message for you: ' + helloMessage);
  },
    
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to TestingServicesController)
   */
  _config: {}

  
};

module.exports = TestingServicesController;
