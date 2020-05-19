import React from "react";
import { Typography, Box } from "@material-ui/core";
import projectData from "../Data/projectData";
import Slider from "./component/Slider";

const Section = () => {
  return (
    <ul>
      {projectData.map((data) => (
        <Box
          key={data.id}
          id={data.id}
          style={{
            width: "100%",
            height: "100vh",
            borderBottom: "1px solid black",
          }}
        >
          <Typography>{data.title}</Typography>
          <Typography>{data.description}</Typography>
          <Slider slides={data.images} />
        </Box>
      ))}
    </ul>
  );
};

export default Section;
