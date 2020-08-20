'use strict'

const User = require('../models/user');

function getUser (req, res) {
    let userId = req.params.userId;

    User.findById(userId, (err, user) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if (!user) return res.status(404).send({message: 'El usuario no existe'});

        res.status(200).send({ user });
    })
}

function getUsers (req, res) {
    User.find({}, (err, users) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        if (!users) return res.status(404).send({ message: 'No existen productos'});

        res.send(200).status({ users });  
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
        if (err) res.status(500).send({message: `Error al salvar en la db: ${err}`});

        res.status(200).send({user: userSaved});
    })
}

function updateUser (req, res) {
    let userId = req.params.userId;
    let update = req.body;

    User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
        if (err) return res.status(500).send({message: `Error al actualizar el usuario: ${err}`});
        
        res.status(200).send({ user: userUpdated });
    })
}

function deleteUser (req, res) {
    let userId = req.params.userId;

    User.findById(userId, (err, user) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
        
        user.remove(err => {
            if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
            res.status(200).send({message: 'El usuario ha sido eliminado'});
        })
    })
}

module.exports = {
    getUser,
    getUsers,
    saveUser,
    updateUser,
    deleteUser
}
