const express = require('express');
const router = express.Router();
const Post = require('../models/post.js'); 
const mongoose = require('mongoose');
router.get('/',async(req,res)=>{
    Post.find()
        .then((result)=>{
            res.render('index',{PostAll:result})
        })
        .catch((err)=>{
            res.status(500).send(err);
        })
    res.render('index',{title:'hey'});
})
const isReal = (req,res,next)=>{
    if(req.body.name){
        next();
    }else{
        res.send('Rendszerhiba');
        return;
    } 
}
router.post('/:id',isReal,(req,res)=>{
    //Post.findAndUpdate({_id:req.params.id},{$set:{comments:comments.push()}})
        .then((result)=>{
            res.send(result)
        })
})


module.exports = router;
