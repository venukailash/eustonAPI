const registrationRouter = require('express').Router();
var registrationList = require('../controllers/registrationController');


// get and post request for /driver endpoints
registrationRouter
    .route("/")
    .post(registrationList.createNewRegistration)

registrationRouter
    .route("/:id")
    .get(registrationList.getOneRegistration)
    .put(registrationList.updateRegistration)
    .delete(registrationList.deleteRegistration)

module.exports = registrationRouter;