import React from "react";
import Navbar from "../Navbar";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import projects from "../Data/projectData";
import ImageSlider from "./ImageSlider";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Album = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        <div
          className={classes.heroContent}
          style={{ backgroundColor: "#344" }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Projects
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    All
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Javascript, CSS, HTML
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    React
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Express, NodeJS, MongoDB
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    React, Apollo, GraphQL
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Etc
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.project}>
                  <ImageSlider image={project.images} />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography>{project.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      href={project.github}
                      target="_blank"
                    >
                      Gitgub
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default Album;
