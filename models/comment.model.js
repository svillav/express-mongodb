const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentModel = new Schema({
    author: { type: String, required:true},
},{timestamps:true});

module.exports = mongoose.model('CommentModel', CommentModel);
