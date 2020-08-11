const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const CommentSchema = new Schema({
    content: { type: String, required: true}
},{timestamps:true});


export default mongoose.model('Comment', CommentSchema);