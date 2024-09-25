const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
dotenv.config(); // Load environment variables before accessing them

const app = express();
const port = process.env.PORT || 3000; // Default to port 5000 if PORT is not in env

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
const connection = async () => {
  const URL = process.env.MONGO_URL;
  try {
    await mongoose.connect(URL, {});
    console.log("Connected successfully to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1); // Exit the process if DB connection fails
  }
};

// Routes
app.use("/auth", authRouter);
app.use("/users", userRouter);

// Start the server and connect to the database
app.listen(port, async () => {
  await connection(); // Connect to MongoDB
  console.log(`Server is listening on port ${port}`);
});
