
import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();
const app = express();
app.use(express.json());

// Multer setup for file uploads
const upload = multer({ dest: "uploads/" });

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Signup route
app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    const newUser = new User({ username, password });
    await newUser.save();
    res.json({ message: "Signup successful!" });
  } catch (err) {
    res.status(500).json({ error: "Signup failed" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || user.password !== password)
      return res.status(401).json({ error: "Invalid credentials" });

    res.json({ message: "Login successful!" });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

// File upload route
app.post("/uploadFile", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  res.json({
    message: "File uploaded successfully (stored locally)",
    fileInfo: req.file
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>console.log(`🚀 Server running on port ${PORT}`));

