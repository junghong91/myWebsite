const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");

const User = require("../models/user");

router.get("/", (req, res) => {
  res.send("passport module test");
});

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({
        email: "This email already exist",
      });
    } else {
      const newUser = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;

        newUser.password = hash;

        newUser
          .save()
          .then((user) => res.json(user))
          .catch((err) => console.log(err));
      });
    }
  });
});

module.exports = router;
