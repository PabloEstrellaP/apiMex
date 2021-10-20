
const {Schema, model} = require('mongoose');

const User = Schema({

    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    pathImg: {
        type: String,
        required: true
    },
    idAdmin: {
        type: Number
    },
});

module.exports = model('User', User);