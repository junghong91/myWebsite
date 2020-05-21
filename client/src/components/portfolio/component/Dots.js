import React from "react";
import styled from "styled-components";

const DotMain = styled.span`
  margin-right: 5px;
  cursor: pointer;
  opacity: 0.5;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "grey" : "white")};
`;

const DotsMain = styled.div`
  display: flex;
  align-self: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  justify-content: center;
`;

const Dot = (props) => {
  return <DotMain active={props.active}></DotMain>;
};

const Dots = ({ slides, activeIndex }) => {
  return (
    <DotsMain>
      {slides.map((slide, index) => {
        return <Dot key={slide} active={activeIndex === index} />;
      })}
    </DotsMain>
  );
};

export default Dots;
