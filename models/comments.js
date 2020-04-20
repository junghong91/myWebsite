const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  authorname: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Comments = mongoose.model("Comments", commentSchema);

module.exports = Comments;
