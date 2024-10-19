const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      res.send(req.body);
      console.log(result);
    } else {
      console.log("User already registered");
    }
  } catch (e) {
    res.send("Something Went Wrong");
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {
      res.send({ success: true, message: "Login successful" });
    } else {
      res.status(401).send({ success: false, message: "Invalid email or password" });
    }
  } catch (e) {
    res.status(500).send("Something Went Wrong");
  }
});

module.exports = router;