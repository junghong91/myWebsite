import React from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#233",
  },
  fonts: {
    color: "tan",
    fontWeight: "900",
  },
  inline: {
    color: "tomato",
    display: "inline",
  },
  description: {
    color: "white",
  },
  list: {
    width: "80%",
    margin: "0 auto",
  },
}));

const DisplayComments = ({ comments }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {comments.map((comment) => {
        return (
          <React.Fragment key={comment._id}>
            <ListItem
              key={comment._id}
              alignItems="flex-start"
              className={classes.list}
            >
              <ListItemText
                primary={
                  <Typography className={classes.fonts}>
                    {comment.authorname}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {comment.title}
                    </Typography>
                    <Box component="span" className={classes.description}>
                      {" "}
                      - {comment.description}
                    </Box>
                  </>
                }
              ></ListItemText>
            </ListItem>
            <Divider />
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default DisplayComments;
