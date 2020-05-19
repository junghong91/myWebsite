import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  SlideCSS: {
    height: "80%",
    width: "80%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
});

const Slide = (props) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.SlideCSS}
      style={{ backgroundImage: `url(${props.imagePath})` }}
    ></Box>
  );
};

export default Slide;
