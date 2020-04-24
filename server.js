const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const passport = require("passport");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

const commentsRouter = require("./routes/comments");
const userRouter = require("./routes/users");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("tiny"));
app.use(passport.initialize());

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () =>
  console.log("MongoDB connection established successfully!")
);

// Passport module selected
require("./passport")(passport);

app.use("/comments", commentsRouter);
app.use("/api/users", userRouter);

app.listen(port, () => console.log(`The App is running on the PORT: ${port}`));
