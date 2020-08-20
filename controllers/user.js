'use strict'

const User = require('../models/user');
const service = require('../services');

//CRUD
function getUser (req, res) {
    let userId = req.params.userId;

    User.findById(userId, (err, user) => {
        if (err) return res.status(500).send({message: `Error making the request: ${err}`});
        if (!user) return res.status(404).send({message: 'User does not exist'});

        res.status(200).send({ user });
    })
}

function getUsers (req, res) {
    User.find({}, (err, users) => {
        if (err) return res.status(500).send({message: `Error making the request: ${err}`});
        if (!users) return res.status(404).send({ message: 'There is no users'});

        res.status(200).send({ users });  
    })
}

function saveUser (req, res) {
    console.log('POST /api/user')
    console.log(req.body)

    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save((err, userSaved) => {
        if (err) res.status(500).send({message: `Failed to save to db: ${err}`});

        res.status(200).send({user: userSaved});
    })
}

function updateUser (req, res) {
    let userId = req.params.userId;
    let update = req.body;

    User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
        if (err) return res.status(500).send({message: `Error updating user: ${err}`});
        
        res.status(200).send({ user: userUpdated });
    })
}

function deleteUser (req, res) {
    let userId = req.params.userId;

    User.findById(userId, (err, user) => {
        if (err) return res.status(500).send({message: `Error making the request: ${err}`});
        
        user.remove(err => {
            if (err) return res.status(500).send({message: `Error making the request: ${err}`});
            res.status(200).send({message: 'User has been deleted'});
        })
    })
}

//Log
function signUp (req, res) {
    const user = new User({
        name: req.body.name,
        email: req.body.email
    })

    user.save((err) => {
        if (err) res.status(500).send({ message: `Failed to create user: ${err}`});

        return res.status(200).send({ message: 'User created', token: service.createToken(user) });
    })
}

function signIn (req, res) {
    User.find({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send({ message: err });
        if (!user) return res.status(404).send({ message: 'User does not exist' });

        req.user = user;
        res.status(200).send({
            message: 'You have successfully logged in',
            token: service.createToken(user)
        })
    })
}

module.exports = {
    getUser,
    getUsers,
    saveUser,
    updateUser,
    deleteUser,
    signUp,
    signIn
}
