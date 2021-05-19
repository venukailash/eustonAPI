'use strict';

// create App function
    module.exports = function(app) {
        var driverList = require('../controllers/driverController');


// get and post request for /driver endpoints
        app
        .route("/drivers")
        .get(driverList.listAllDrivers)
        .post(driverList.createNewDriver)

        app
        .route("/driver/:id")
        .put(driverList.updateDriver)
        .delete(driverList.deleteDriver);
    };