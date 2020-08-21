'use strict'

const express = require('express');
const userControllers = require('../controllers/user');
const commentControllers = require('../controllers/comment');
const auth = require('../middlewares/auth');
const api = express.Router();

api.get('/user', userControllers.getUsers);
api.get('/user/:userId', userControllers.getUser);
api.post('/user', auth, userControllers.saveUser);
api.put('/user/:userId',  auth, userControllers.updateUser);
api.delete('/user/:userId', auth, userControllers.deleteUser);
api.post('/signup', userControllers.signUp);
api.post('/signin', userControllers.signIn);
api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'You have access' });
})

api.get('/comment', commentControllers.getComments);
api.get('/comment/:commentId', commentControllers.getComment);
api.post('/comment', commentControllers.saveComment);
api.put('/comment/:commentId', commentControllers.updateComment);
api.delete('/comment/:commentId', commentControllers.deleteComment);

module.exports = api;