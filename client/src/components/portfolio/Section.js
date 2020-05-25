import React from "react";
import { Typography, Box, Button, Chip } from "@material-ui/core";
import projectData from "../Data/projectData";
import Slider from "./component/Slider";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub, ImportContacts } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#344",
    padding: 0,
  },

  title: {
    color: "tan",
    marginBottom: "1rem",
  },

  description: {
    color: "tan",
    opacity: 0.8,
    marginBottom: "0.6rem",
  },

  buttonBox: {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
  },

  button: {
    // background: "linear-gradient(45deg, #233 30%, #455 90%)",
    background: "transparent",
    height: 35,
    padding: "0 1rem",
    width: "8rem",
    color: "darkgray",
    "&:hover": {
      color: "darkcyan",
      backgroundColor: "#455",
    },
  },
  chips: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: "1.2rem",
    width: "50%",
    margin: "2rem auto",
    flexDirection: "row",
  },
  chip: {
    fontSize: "1rem",
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
    color: "tan",
    border: "1px solid tan",
    "&:hover": {
      // color: "darkgray",
      // border: "1px solid darkgray",
      opacity: 0.5,
    },
  },
});

const Section = () => {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      {projectData.map((data) => (
        <Box
          key={data.id}
          id={data.id}
          style={{
            width: "100%",
            height: "100vh",
            paddingTop: "3rem",
          }}
        >
          <Typography className={classes.title} variant="h3" align="center">
            {data.title}
          </Typography>
          <Typography
            className={classes.description}
            variant="h5"
            align="center"
          >
            {data.description}
          </Typography>
          <Slider slides={data.images} />
          <Box align="center" className={classes.buttonBox}>
            <Button
              className={classes.button}
              href={data.github}
              target="_blank"
              startIcon={<GitHub />}
            >
              Github
            </Button>
            <Button
              href={data.page}
              target="_blank"
              className={classes.button}
              startIcon={<ImportContacts />}
            >
              View
            </Button>
          </Box>
          <Box className={classes.chips}>
            {data.skills.map((skill) => {
              return (
                <Chip
                  variant="outlined"
                  className={classes.chip}
                  label={"# " + skill}
                  clickable
                />
              );
            })}
          </Box>
        </Box>
      ))}
    </ul>
  );
};

export default Section;
