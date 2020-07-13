const express = require('express');
const router = express.Router();
const Post = require('../models/post.js'); 
const controll = require('../controllers/index');

router.get('/',controll.listPosts);
router.get('/:title',controll.detailPost);
router.post('/:id',controll.newComment);
module.exports = router;
