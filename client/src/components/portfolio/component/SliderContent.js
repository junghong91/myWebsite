import React from "react";
import styled from "styled-components";
import Slide from "./Slide";

const Main = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 100%;
  width: ${(props) => props.width}px;
  display: flex;
`;

const SliderContent = (props) => {
  return (
    <Main
      width={props.width}
      translate={props.translate}
      transition={props.transition}
    >
      {props.imgPath.map((path, index) => (
        <Slide key={index} imgPath={path}></Slide>
      ))}
    </Main>
  );
};

export default SliderContent;
