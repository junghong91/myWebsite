import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SliderContent from "./SliderContent";

const useStyles = makeStyles({
  SliderCSS: {
    position: "relative",
    height: "60%",
    width: "60%",
    margin: "0 auto",
    overflow: "hidden",
    backgroundColor: "#233",
  },
});

const Slider = (props) => {
  const classes = useStyles();
  // const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition } = state;

  return (
    <div className={classes.SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        style={{ width: "100%" }}
        slideArray={props.slides}
      ></SliderContent>
    </div>
  );
};

export default Slider;
