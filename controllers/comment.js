'use strict'

const Comment = require('../models/comment');

function getComments (req, res) {
    let commentId = req.params.commentId;

    Comment.findById(commentId, (err, comment) => {
        if (err) return res.status(500).send({message: `Error making the request: ${err}`});
        if (!comment) return res.status(404).send({message: 'Comment does not exist'});

        res.status(200).send({ comment });
    })
}

function getComment (req, res) {
    let commentId = req.params.commentId;

    Comment.findById(commentId, (err, comment) => {
        if (err) return res.status(500).send({message: `Error making the request: ${err}`});
        if (!comment) return res.status(404).send({message: 'Comment does not exist'});

        res.status(200).send({ user });
    })
}

function saveComment (req, res) {
    console.log('POST /api/comment')
    console.log(req.body)

    let comment = new Comment();
    comment.content = req.body.content;

    comment.save((err, commentSaved) => {
        if (err) res.status(500).send({message: `Failed to save to db: ${err}`});

        res.status(200).send({comment: commentSaved});
    })
}

function updateComment (req, res) {
    let commentId = req.params.commentId;
    let update = req.body;

    Comment.findByIdAndUpdate(commentId, update, (err, commentUpdated) => {
        if (err) return res.status(500).send({message: `Error updating comment: ${err}`});
        
        res.status(200).send({ comment: commentUpdated });
    })
}

function deleteComment (req, res) {
    let commentId = req.params.commentId;

    Comment.findById(userId, (err, comment) => {
        if (err) return res.status(500).send({message: `Error making the request: ${err}`});
        
        comment.remove(err => {
            if (err) return res.status(500).send({message: `Error making the request: ${err}`});
            res.status(200).send({message: 'Comment has been deleted'});
        })
    })
}


module.exports = {
    getComments,
    getComment,
    saveComment,
    updateComment,
    deleteComment
}