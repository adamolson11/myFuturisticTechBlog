const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postController');

// Define routes
router.post('/', PostController.createPost);
router.get('/', PostController.getAllPosts);
router.get('/:id', PostController.getPostById);
router.put('/:id', PostController.updatePostById);
router.delete('/:id', PostController.deletePostById);

module.exports = router;
