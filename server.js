'use strict'

// require express and bodyParser
const  express = require("express");
const  bodyParser = require("body-parser");

// create express app
const  app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Import DB Connection
require("./config/db");

// Import API route
var routes = require('./api/routes/driverRoutes'); //importing route
routes(app);

// define port to run express app
const  port = process.env.PORT || 3030;

// Add endpoint
app.get('/', (req, res) => {
res.send("Hello World");
});

// Listen to server
app.listen(port, () => {

console.log(`Server running at http://localhost:${port}`);
});