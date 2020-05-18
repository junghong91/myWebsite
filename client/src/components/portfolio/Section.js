import React from "react";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import projectData from "../Data/projectData";
import Slider from "./component/Slider";

const Section = () => {
  return (
    <ul>
      {projectData.map((data) => (
        <Box
          id={data.id}
          style={{
            marginLeft: "250px",
            width: "100%",
            height: "100vh",
            borderBottom: "1px solid black",
          }}
        >
          <Typography>{data.title}</Typography>
          <Typography>{data.description}</Typography>
          <Slider />
        </Box>
      ))}
    </ul>
  );
};

export default Section;
