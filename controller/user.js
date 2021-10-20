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
            const data = await User.findById( id );
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

    addUser = async ( req, res = response ) => {
        try {
            const { name, lastName, email, pathImg, idAdmin } = req.body;
            const newUser = new User({
                name, 
                lastName, 
                email, 
                pathImg, 
                idAdmin
            });
            await newUser.save();
            return res.status(200).json({
                ok : true, 
                msg : newUser
            });
        } catch (error) {
            return res.status(400).json({
                ok : false,
                msg : error
            });
        }
    }

    editUser = async ( req, res = response ) => {
        try {
            const { name, lastName, email, pathImg, _id } = req.body;
            const editU = await User.findByIdAndUpdate( _id );

            editU.name = name;
            editU.lastName = lastName;
            editU.email = email;
            editU.pathImg = pathImg;
            await editU.save();

            return res.status(200).json({
                ok : true,
                msg : editU
            });
        } catch (error) {
            return res.status(400).json({
                ok : false,
                msg : error
            });
        }
    }
}

module.exports = new UserController();