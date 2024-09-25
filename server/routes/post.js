const express = require("express");
const router = express.Router();
const {
  createPost,
  getPosts,
  getUserPost,
  deletePost,
} = require("./../controllers/postController");

router.route("/user/:userId").get(getUserPost);
router.route("/").get(getPosts);
