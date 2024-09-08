const User = require("../models/userModel");

// GET /users
const getAllUsers = (req, res) => {
  const users = User.getAll();
  res.json(users);
};

// POST /users
const createUser = (req, res) => {
  const user = User.addOne({ ...req.body });
  if (user) {
    res.json(user);
  } else {
    res.status(500).json({ message: "Failed to create user" });
  }
};

// GET /users/:userId
const getUserById = (req, res) => {
  const user = User.findById(req.params.userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "user not found" });
  }
};

// PUT /users/:userId
const updateUser = (req, res) => {
  const user = User.updateOneById(req.params.userId, { ...req.body });
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "user not found" });
  }
};

// DELETE /users/:userId
const deleteUser = (req, res) => {
  const user = User.deleteOneById(req.params.userId);
  if (user) {
    res.json({ message: "Car deleted successfully" });
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
