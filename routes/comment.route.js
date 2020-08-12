const express = require('express');
const router = express.Router();

// Require the controllers
const commentController = require('../controllers/comment.controller');

// CRUD comments routes
router.post('/create', commentController.commentCreate);
router.get('/:id', commentController.commentDetails);
router.put('/:id/update', commentController.commentUpdate);
router.delete('/:id/delete', commentController.commentDelete);


module.exports = router;