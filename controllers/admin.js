const Post = require('../models/post')
const mongoose = require('mongoose')
function login(req,res){
    return true;
}

function isLoggedInAdmin(req,res,next){
    if(login()){
        next();
    }else{
        res.status(400).send('you are not a admin')
    }
}
module.exports.isLoggedInAdmin = isLoggedInAdmin;
function renderAdminPage(req,res){
    res.render('admin')
}
module.exports.renderAdminPage = renderAdminPage;


function createPost(req,res){
    console.log(req.body)
    /*Post.create({
        title:req.body.title,
        subTitle:req.body.subTitle,
        author:req.body.author,
        postBody:req.body.postBody,
        comments:[],
        hidden:false,
    },(err)=>{
        if(err,result){
            res.status(500).send('error');
        }else{
            res.status(201).send(result);
        }

    })*/
    
}

module.exports.createPost = createPost;

function deletePost(req,res){
    Post.findByIdAndDelete(req.params.id)
        .then((result)=>{
            res.status(200).res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        })
}



module.exports.deletePost = deletePost;
function updatePost(req,res){
    const id = req.params.id;
    const newBody = req.body;
    Post.findOneAndUpdate({_id:id},{$set:{newBody}},{new:true})
        .then((result)=>{
            res.status(201).json(result);
        })
        .catch((err)=>{
            res.status(500).send(err);
        })
}
module.exports.updatePost = updatePost;