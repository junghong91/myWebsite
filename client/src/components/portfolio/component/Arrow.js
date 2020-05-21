import React from "react";
import styled from "styled-components";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

const Main = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === "right" ? `right: 25px` : `left: 25px`)};
  height: 30px;
  width: 30px;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  opacity: 0.5;
  &:hover {
    transform: scale(1.1);
  }
  svg {
    outline: 0;
  }
`;

const Arrow = ({ handleClick, direction }) => {
  return (
    <Main onClick={handleClick} direction={direction}>
      {direction === "right" ? <ArrowForward /> : <ArrowBack />}
    </Main>
  );
};

export default Arrow;
