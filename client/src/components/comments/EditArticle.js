import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import KeyboardReturn from "@material-ui/icons/KeyboardReturn";
import Navbar from "../Navbar";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    margin: "4rem",
    // transform: "translate(-50%, -50%)",
    // position: "absol ute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
  comments: {
    width: "100%",
    height: "100%",
    margin: "0px auto",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const EditArticle = (props) => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [authorname, setAuthorname] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const comment = {
      title,
      description,
      authorname,
      createdAt: Date.now(),
    };

    axios
      .put(`/comments/update/${props.match.params.id}`, comment)
      .then((res) => {
        setMessage("Comment is Updated");
        alert(message);
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  useEffect(() => {
    axios
      .get(`/comments/${props.match.params.id}`)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
        setAuthorname(res.data.authorname);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, [props]);

  return (
    <Box component="div" style={{ background: "#233", height: "100%" }}>
      <Navbar />
      <Grid container justify="center">
        <form className={classes.form} onSubmit={onSubmit}>
          <Typography
            variant="h5"
            style={{
              color: "tomato",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            How Do You Think of My Portfolio?
          </Typography>

          <InputField
            fullWidth={true}
            label="Your Name or Company Name"
            value={authorname}
            onChange={(e) => setAuthorname(e.target.value)}
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            multiline
            rows={4}
            margin="dense"
            size="medium"
          />
          <br />
          <Button
            type="submit"
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
          >
            Edit Comment
          </Button>
          <br />
          <Button
            href="/comments"
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<KeyboardReturn />}
          >
            Go Back
          </Button>
        </form>
      </Grid>
    </Box>
  );
};

export default EditArticle;
