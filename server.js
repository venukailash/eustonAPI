'use strict'

// require express and bodyParser
const express = require("express");
const bodyParser = require("body-parser");

// require Routers
const driverRouter = require('./api/routes/driverRoutes')
const registrationRouter = require('./api/routes/registrationRoutes')

// create express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import DB Connection
require("./config/db");

// define port to run express app
const port = process.env.PORT || 3030;

// Add Test endpoint
app.get('/', (req, res) => {
    res.send("App is working...");
});

// Use Routes
app.use('/driver', driverRouter);
app.use('/registration', registrationRouter);

// Listen to server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});