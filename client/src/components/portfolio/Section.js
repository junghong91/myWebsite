import React from "react";
import { Typography, Box, Button, Chip } from "@material-ui/core";
import projectData from "../Data/projectData";
import Slider from "./component/Slider";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub, ImportContacts } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#133",
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
    gridTemplateColumns: "repeat(2, 70px)",
    gap: "4rem",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0.7rem",
  },

  button: {
    // background: "linear-gradient(45deg, #233 30%, #455 90%)",
    background: "#122",
    height: 35,
    padding: "0 1rem",
    width: "8rem",
    color: "tan",
    "&:hover": {
      color: "tomato",
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
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
    color: "tomato",
    border: "1px solid tomato",
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
            borderTop: "15px solid #344",
            borderBottom: "15px solid #344",
            borderRight: "30px solid #344",
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
              variant="outlined"
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
                  size="small"
                  label={"# " + skill}
                  clickable
                  size="md"
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
