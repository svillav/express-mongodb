const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true},
},{timestamps:true});

module.exports = mongoose.model('Comment', CommentSchema);
