const mongoose = require('mongoose');
const UserModel = require('../models/user.model');
const services = require('../services')

function signUp (req, res) {
    const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
    })

    user.save( err => {
        if (err) res.status(500).send({ message: `Error creating user: ${err}`});

        return res.status(200).send({ token: services.createToken(user) });
    })
}

function signIn (req, res) {

}

module.exports = { signUp, signIn };