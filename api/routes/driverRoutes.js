const driverRouter = require('express').Router();
var driverList = require('../controllers/driverController');

driverRouter
    .route("/")
    .get(driverList.listAllDrivers)
    .post(driverList.createNewDriver)

driverRouter
    .route("/:id")
    .get(driverList.getOneDriver)
    .put(driverList.updateDriver)
    .delete(driverList.deleteDriver)

module.exports = driverRouter;