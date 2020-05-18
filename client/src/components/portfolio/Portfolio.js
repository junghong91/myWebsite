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
  },
}));

const Album = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <main className={classes.root}>
        <Grid container>
          <Grid item>
            <PorfolioNavbar />
          </Grid>
          <Grid item>
            <Section />
          </Grid>
        </Grid>
      </main>
    </React.Fragment>
  );
};

export default Album;
