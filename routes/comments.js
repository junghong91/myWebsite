const express = require("express");
const router = express.Router();
const Comments = require("../models/comments");

// REQUEST GET ALL ARTICLES
router.get("/", (req, res) => {
  Comments.find()
    .then((comment) => res.json(comment))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//REQUEST ADD NEW ARTICLE
router.post("/add", (req, res) => {
  const newComment = new Comments({
    title: req.body.title,
    description: req.body.description,
    authorname: req.body.authorname,
    createdAt: Date.now(),
  });

  newComment
    .save()
    .then(() => res.json("The new Article posted successfully"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//REQUEST FIND ARTICLE BY ID
router.get("/:id", (req, res) => {
  Comments.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//REQUEST FIND ARTICLE BY ID AND UPDATE
router.put("/update/:id", (req, res) => {
  Comments.findById(req.params.id).then((comment) => {
    comment.title = req.body.title;
    comment.description = req.body.description;
    comment.authorname = req.body.authorname;

    comment
      .save()
      .then(() => res.json("The Article is Updated successfully"))
      .catch((err) => res.status(400).json());
  });
});

//REQUEST FIND ARTICLE BY ID AND DELETE
router.delete("/delete/:id", (req, res) => {
  Comments.findByIdAndDelete(req.params.id)
    .then(() => res.json("The Article is Deleted successfully"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
