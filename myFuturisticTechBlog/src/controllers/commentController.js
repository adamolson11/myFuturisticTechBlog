// Import the Comment model
const Comment = require('../models/Comment');

// Controller functions
module.exports = {
  // Create a new comment
  createComment: async (req, res) => {
    try {
      const newComment = new Comment(req.body);
      const savedComment = await newComment.save();
      res.status(201).json(savedComment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get all comments
  getAllComments: async (req, res) => {
    try {
      const comments = await Comment.find();
      res.json(comments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get a single comment by ID
  getCommentById: async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id);
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
      res.json(comment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update a comment by ID
  updateCommentById: async (req, res) => {
    try {
      const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedComment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
      res.json(updatedComment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete a comment by ID
  deleteCommentById: async (req, res) => {
    try {
      const deletedComment = await Comment.findByIdAndDelete(req.params.id);
      if (!deletedComment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
      res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
