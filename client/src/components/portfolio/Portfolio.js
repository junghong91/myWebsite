import React from "react";
import Navbar from "../Navbar";
import { CssBaseline, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PorfolioNavbar from "./PorfolioNavbar";
import Section from "./Section";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#344",
    height: "100%",
    width: "100%",
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <main className={classes.root}>
        <Grid container>
          <Grid item xs={2}>
            <PorfolioNavbar />
          </Grid>
          <Grid item xs={10}>
            <Section />
          </Grid>
        </Grid>
      </main>
    </React.Fragment>
  );
};

export default Portfolio;
