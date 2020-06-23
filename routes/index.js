const express = require('express');
const router = express.Router();
const Post = require('../models/post.js'); 
router.get('/',(req,res)=>{
    //adatbázis
    res.render('index',{title:'hey'});
})
const isReal = (req,res,next)=>{
    if(!req.body.name){
        next()
    }else{
        res.send('Rendszerhiba');
        return;
    } 
}
router.post('/:id',isReal,(req,res)=>{
    Post.find
    
})

module.exports = router;
