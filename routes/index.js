'use strict'

const express = require('express');
const userControllers = require('../controllers/user');
const authControllers = require('../controllers/auth');
const auth = require('../middlewares/auth');
const api = express.Router();

api.get('/user', userControllers.getUsers);
api.get('/user/:userId', userControllers.getUser);
api.post('/user', userControllers.saveUser);
api.put('/user/:userId', userControllers.updateUser);
api.delete('/user/:userId', userControllers.deleteUser);
api.post('/signup', authControllers.signUp);
api.post('/signin', authControllers.signIn);
api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'Tienes acceso' });
})

module.exports = api;