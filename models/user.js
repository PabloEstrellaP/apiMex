
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
    imgPath: {
        type: String,
    },
    idAdmin: {
        type: Number
    },
});

module.exports = model('User', User);