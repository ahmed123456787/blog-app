const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Post = require("../models/post");
const Comment = require("../models/comment");

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10); // Await bcrypt.salt() to get the generated salt
    const hashPassword = await bcrypt.hash(password, salt); // Await bcrypt.hash()

    // Create a new user with the hashed password
    const user = new User({ username, email, password: hashPassword });

    // Save the user to the database
    const savedUser = await user.save();

    // Respond with the saved user
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json(404).json({ message: "User not Found" });
    }
    // comapre the password
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(401).json({
        message: "wrong credentails",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "3d",
    });
    const { password, ...info } = user._doc;
    res.cookie("jwttoken", token).status(200).json(info);
    // res.status(200).json("hello user for this ");
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.logout = async (req, res) => {
  try {
    res
      .clearCookie("jsonwebtoken", { secure: true })
      .status(200)
      .send("User logout successfuly");
  } catch (err) {}
};

//Update
exports.updateUser = async (req, res) => {
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hashSync(req.body.password, salt);
    }
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

//Delete
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete({ id: req.body.id });
    await Post.deleteMany({ userId: req.body.id });
    await Comment.deleteMany({ userId: req.body.id });
    res.status(200).json("we delete the user");
  } catch (err) {
    req.status(404).json("we cannot delete the user");
  }
};

//Get User

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById({ id: req.params.id });
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json(err.message);
  }
};
