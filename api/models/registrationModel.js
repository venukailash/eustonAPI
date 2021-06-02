'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const RegistrationSchema = new Schema({
        type: {
            type:String,
        },
        name:{
            type:String,
        },
        surname:{
            type:String,
        },
        businessName:{
            type:String,
        },
        registeredName:{
            type:String,
        },
        addressLineOne:{
            type:String,
        },
        addressLineTwo:{
            type:String,
        },
        city:{
            type:String,
        },
        state:{
            type:String,
        },
        pinCode:{
            type:String,
        },
        createdOn: {
            type:Date,
            default:Date.now
        }
    });

// create and export model
module.exports = mongoose.model("registrationModel", RegistrationSchema);