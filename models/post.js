const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    title: String,
    subTitle: String,
    author: String,
    body: String,
    comments:[{body: String,comAuthor:String,date:Date}],
    hidden:Boolean,
})
Post = mongoose.model('Post',postSchema);
module.exports = Post;