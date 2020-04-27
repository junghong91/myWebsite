const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Load input validation
const validationRegisterInput = require("../validation/register");
const validationLoginInput = require("../validation/login");

const User = require("../models/user");

require("dotenv").config();
const secretOrKey = process.env.secretOrKey;

router.get("/", (req, res) => {
  res.send("passport module test");
});

router.post("/register", (req, res) => {
  // From validation
  const { errors, isValid } = validationRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({
        email: "This email already exist",
      });
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
      });
      // hashcode incoding
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            throw err;
          }

          newUser.password = hash; // 변형된 password를 저장

          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// Login Router
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find member by email
  User.findOne({ email }).then((user) => {
    if (!user) {
      errors.email = "You are not the member of this website";
      return res.status(400).json(errors);
    }
    // Check Password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // Correct Password
        // JWT creates PAYLOAD
        console.log(user._id);
        const payload = {
          id: user._id,
          name: user.name,
        };

        // Create JMT Token
        // available for 1hour
        jwt.sign(payload, secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token,
          });
        });
      } else {
        errors.password = "Wrong Password";
        return res.status(400).json(errors);
      }
    });
  });
});

// getting the login(current) user information
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      email: req.user.email,
      name: req.user.name,
    });
  }
);

module.exports = router;
