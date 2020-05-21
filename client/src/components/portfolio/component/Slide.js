import React from "react";
import styled from "styled-components";

const Slide = (props) => {
  return <Main imgPath={props.imgPath}></Main>;
};

const Main = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.imgPath});
`;

export default Slide;
