import React from "react";
import {
  Divider,
  Typography,
  Box,
  Paper,
  Button,
  Grid,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DeleteOutline, Edit } from "@material-ui/icons";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    background: "#233",
    padding: theme.spacing(0, 3),
  },
  paper: {
    width: "80%",
    height: "100%",
    marginBottom: "1rem",
    background: "#344",
    color: "tan",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  button: {
    width: "6rem",
    margin: theme.spacing(1),
    color: "tomato",
    border: "1px solid tomato",
    fontSize: "0.7rem",
  },
}));

const DisplayComments = ({ comments }) => {
  const classes = useStyles();

  //DELETE Comment BY ID
  const deleteComment = (id) => {
    axios.delete(`/comments/delete/${id}`).then((res) => alert(res.data));
  };

  return (
    <Box className={classes.root}>
      {comments.map((comment, index) => (
        <Paper className={classes.paper} key={comment._id}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography style={{ color: "tomato" }} noWrap>
                {comment.authorname}
              </Typography>
              <Typography noWrap>{comment.title}</Typography>
              <Typography>{comment.description}</Typography>
              <Box style={{ marginTop: "1rem" }}>
                <Button
                  href={`/comments/edit/${comment._id}`}
                  className={classes.button}
                  variant="outlined"
                  size="small"
                  startIcon={<Edit />}
                >
                  Edit
                </Button>
                <Button
                  className={classes.button}
                  variant="outlined"
                  size="small"
                  startIcon={<DeleteOutline />}
                  onClick={() => deleteComment(comment._id)}
                >
                  Delete
                </Button>
                <Box>{comment.createdAt}</Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default DisplayComments;
