const express = require('express');
const router = express.Router();

// Require the controllers
const userController = require('../controllers/user.controller');

// CRUD users routes
router.post('/create', userController.userCreate);
router.get('/:id', userController.userDetails);
router.put('/:id/update', userController.userUpdate);
router.delete('/:id/delete', userController.userDelete);


module.exports = router;