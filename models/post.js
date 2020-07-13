const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    title: String,
    subTitle: String,
    author: String,
    postBody: String,
    comments:[{commentBody: String,commentAuth:String,date:{type: Date,default: Date.now}}],
    hidden:Boolean,
},{timestamps:true})
Post = mongoose.model('Post',postSchema);
module.exports = Post;