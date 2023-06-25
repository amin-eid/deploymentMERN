const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    firstName: { type: String,
        required: [
            true,
            "first Name is required"
        ],
    minlength:[5,"First Name should be at least 5 characters!"]},
    lastName: { type: String,
        required: [
            true,
            "last Name is required"
        ]
     },
   
}, { timestamps: true });
module.exports.Person = mongoose.model('Person', PersonSchema);

