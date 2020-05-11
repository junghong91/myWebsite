import React, { useState } from "react";
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
    marginRight: theme.spacing(1),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 3),
    backgroundColor: "transparent",
    border: "2px solid tomato",
    marginBottom: "1rem",
    borderRadius: "1rem",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  skillsButton: {
    color: "tan",
    border: "1px solid tan",
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
  const [skill, setSkill] = useState("All");

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="lg">
          <div className={classes.heroContent}>
            <Container maxWidth="80%">
              <Typography
                component="h1"
                variant="h3"
                align="center"
                style={{ color: "tan", letterSpacing: "7px" }}
                gutterBottom
              >
                {skill} Projects
              </Typography>
              <Typography
                variant="h6"
                align="center"
                style={{ color: "white" }}
                paragraph
              >
                HTML, CSS, Javascript를 먼저 공부하고, NodeJS, Express를 통해서
                Backend를 구현한 웹 페이지를 작성할 수 있었습니다. 그 후에
                ReactJS 와 React Native 를 다루어 보았고, React Hooks를 사용하여
                웹페이지를 구현하였습니다. 서버에 있어서는 MongoDB를 주로
                사용하였습니다.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button
                      className={classes.skillsButton}
                      variant="outlined"
                      onClick={() => setSkill("All")}
                    >
                      All
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      className={classes.skillsButton}
                      variant="outlined"
                      onClick={() => setSkill("CSS, HTML, Javascript")}
                    >
                      Javascript, CSS, HTML
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      className={classes.skillsButton}
                      variant="outlined"
                      onClick={() => setSkill("Express, NodeJS, MongoDB")}
                    >
                      Express, NodeJS, MongoDB
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      className={classes.skillsButton}
                      variant="outlined"
                      onClick={() => setSkill("React")}
                    >
                      React
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      className={classes.skillsButton}
                      variant="outlined"
                      onClick={() => setSkill("React, Apollo, GraphQL")}
                    >
                      React, Apollo, GraphQL
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      className={classes.skillsButton}
                      variant="outlined"
                      onClick={() => setSkill("Etc")}
                    >
                      Etc
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
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
