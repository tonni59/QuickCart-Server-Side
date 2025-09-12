const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) res.json({ _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin });
  else { res.status(404); throw new Error('User not found'); }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.body.password, salt);
    }
    const updated = await user.save();
    res.json({ _id: updated._id, name: updated.name, email: updated.email, isAdmin: updated.isAdmin });
  } else { res.status(404); throw new Error('User not found'); }
});

module.exports = { getUserProfile, updateUserProfile };
