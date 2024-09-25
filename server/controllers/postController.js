const Post = require("../models/post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Post = require("../models/post");
const Comment = require("../models/comment");

//Update
exports.updatePost = async (req, res) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hashSync(req.body.password, salt);
    }
    const updatePost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatePost);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

//Delete
exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete({ id: req.body.id });
    res.status(200).json("we delete the Post");
  } catch (err) {
    req.status(404).json("we cannot delete the Post");
  }
};

//Get Posts

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

//Create a post

exports.createPost = async () => {
  try {
    const newPost = await new Post(req.body);
    const savedPost = await newPost.save();
    res.status(200).json("creates a post");
  } catch (err) {
    res.status(404).json(err.message);
  }
};

//Get user posts

exports.getUserPost = async (req, res) => {
  try {
    const post = await Post.findById({ userId: req.params.id });
  } catch (err) {}
};
