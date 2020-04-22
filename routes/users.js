const express = require("express");
const router = express.Router();

router.post("register", (req, res) => {
  try {
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: "Server Error..." });
  }
});

module.exports = router;
