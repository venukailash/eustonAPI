const mongoose = require("mongoose");

var DB_USERNAME = 'monument';
var DB_PASSWORD = 'Monument@123';
var DB_TABLE_NAME = 'test_db';

var uri = 'mongodb+srv://' + DB_USERNAME + ':' + DB_PASSWORD + '@monument0.d2nf3.mongodb.net/' + DB_TABLE_NAME +
    '?retryWrites=true&w=majority'


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(uri, options).then(() => {
    console.log("Database connection established!");
},
    err => {
        {
            console.log("Error connecting Database instance due to:", err);
        }
    });

// mongoose.disconnect();