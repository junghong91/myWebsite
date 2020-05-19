import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "./Slide";

const useStyles = makeStyles({
  SliderContentCSS: {
    width: "98%",
    height: "95%",
    display: "flex",
    backgroundColor: "#455",
  },
});

const SliderContent = (props) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.SliderContentCSS}
      style={{
        transform: `translateX(-${(props) => props.translate}px)`,
        transition: `transform ease-out ${(props) => props.transition}s`,
        width: `${(props) => props.width}px`,
      }}
    >
      {props.slideArray.map((slide, index) => {
        return <Slide key={index} imagePath={slide.imgPath} />;
      })}
    </Box>
  );
};

export default SliderContent;
