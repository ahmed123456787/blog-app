const express = require("express");
const userRouter = express.Router();
const {
  updateUser,
  deleteUser,
  getUser,
} = require("./../controllers/userController");

userRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = userRouter;
