const  Registration = require("../models/registrationModel");

// DEFINE CONTROLLER FUNCTIONS

exports.createNewRegistration = (req, res) => {
let  newRegistration = new Registration (req.body);
newRegistration.save((err, registration) => {
if (err) {
res.status(500).send(err);
}
res.status(201).json(registration);
});
};

exports.updateRegistration = (req, res) => {
Registration.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, registration) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(registration);
});
};

exports.deleteRegistration = async ( req, res) => {
await  Registration.deleteOne({ _id:req.params.id }, (err) => {
if (err) {
return res.status(404).send(err);
}
res.status(200).json({ message:"Driver successfully deleted"});
});
};

exports.getOneRegistration = async (req, res) => {
    await Registration.findById({_id:req.params.id},(err, registration) => {
        if(err){
            res.status(500).send(err);
        }
        res.status(200).json(registration);
    })
}