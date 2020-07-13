const Post = require('../models/post')
function listPosts(req,res){
    Post.find().sort({createdAt:-1})
        .then((result)=>{
            
            res.status(200).render('index',{posts:result})
        })
        .catch((err)=>{
            res.status(500).send(err);
     })
}
exports.listPosts = listPosts;

function detailPost(req,res){
    Post.find({title:req.params.title})
        .then((result)=>{
            res.status(200).render('details',{post:result});
        })
}
exports.detailPost = detailPost;

function newComment(req,res){
    
    Post.findOneAndUpdate({_id:req.params.id},{$push:{comments:req.body}})
        .then(()=>{
            res.status(201).end();
        })
        .catch((err)=>{
            console.log('sikertelen push');
             res.status(500).send(err);
         })
    
}
module.exports.newComment = newComment;