const { response } = require('express');
const User = require('../models/user');

class UserController{
    getUsers = async ( req, res = response ) => {
        try {
            const { idAdmin } = req.params;
            const data = await User.find({ idAdmin });
            return res.status(200).json({
                ok : true,
                msg : data
            });
        } catch (error) {
            return res.status(400).json({
                ok : false,
                msg : error
            });
        }
    }

    getUserById = async ( req, res = response ) => {
        try {
            const { id } = req.params;
        } catch (error) {
            return res.status(400).json({
                ok : false,
                msg : error
            });
        }
    }
}

module.exports = new UserController();