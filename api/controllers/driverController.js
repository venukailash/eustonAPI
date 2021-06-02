const  Driver = require("../models/driverModel");

// DEFINE CONTROLLER FUNCTIONS

exports.listAllDrivers = (req, res) => {
Driver.find({}, (err, driver) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(driver);
});
};

exports.createNewDriver = (req, res) => {
let  newDriver = new Driver (req.body);
newDriver.save((err, driver) => {
if (err) {
res.status(500).send(err);
}
res.status(201).json(driver);
});
};

exports.updateDriver = (req, res) => {
Driver.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, driver) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(driver);
});
};

exports.deleteDriver = async ( req, res) => {
await  Driver.deleteOne({ _id:req.params.id }, (err) => {
if (err) {
return res.status(404).send(err);
}
res.status(200).json({ message:"Driver successfully deleted"});
});
};

exports.getOneDriver = async (req, res) => {
    await Driver.findById({_id:req.params.id},(err, driver) => {
        if(err){
            res.status(500).send(err);
        }
        res.status(200).json(driver);
    })
}