const express = require('express');
const router = express.Router();
const controll = require('../controllers/admin')
router.all('/',controll.isLoggedInAdmin);
router.get('/',controll.renderAdminPage);
router.post('/',controll.createPost);
router.delete('/:id',controll.deletePost);
router.put('/:id',controll.updatePost);

module.exports = router;