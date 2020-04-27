const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const passport = require("passport"); // 로그인 인증
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

// Initializing
const app = express();
const port = process.env.PORT || 8080;

const commentsRouter = require("./routes/comments");
const userRouter = require("./routes/users");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("tiny"));
app.use(passport.initialize()); // Passport middleware

app.use(cors());
app.use(express.json());

// Mongo DB Settings
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () =>
  console.log("MongoDB connection established successfully!")
);

// Passport module setting(Passport config)
require("./passport")(passport);

// Routes
app.use("/comments", commentsRouter);
app.use("/api/users", userRouter);

app.listen(port, () => console.log(`The App is running on the PORT: ${port}`));
