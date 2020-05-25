import React, { useState } from "react";
import styled from "styled-components";
import SliderContent from "./SliderContent";
import Arrow from "./Arrow";
import Dots from "./Dots";

const Main = styled.div`
  position: relative;
  height: 50%;
  width: 50%;
  margin: 0 auto;
  overflow: hidden;
  background-color: #455;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Slider = (props) => {
  const [width, setWidth] = useState(null);

  const getWidth = () => {
    console.log(window.innerWidth);
    return 650;
  };

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1,
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };

  return (
    <Main>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.slides.length}
        imgPath={props.slides}
      ></SliderContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />

      <Dots slides={props.slides} activeIndex={activeIndex} />
    </Main>
  );
};

export default Slider;
