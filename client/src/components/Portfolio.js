import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/js.jpg";
import project2 from "../images/nodejs.jpg";
import project3 from "../images/react.jpg";
import project4 from "../images/reactapollo.jpg";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%"
  },
  cardContainer: {
    maxWidth: 345,
    // margin: "1rem",
    margin: "2rem auto"
  }
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="170"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  HTML, CSS, JAVASCRIPT, Algorithm
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  HTML, CSS, Javascript Projects. Learn about CSS Grid, FlexBox.
                  Studies for the Algorithm and CSS
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="170"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  NodeJS, EXPRESS, MongoDB
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  WeTube Project, This is making a WeTube App, built with CSS,
                  HTML, Javascript, NodeJS, MongoDB.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="170"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  ReactJS, REACT Native, React Hooks
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  WeTube Project, This is making a WeTube App, built with CSS,
                  HTML, Javascript, NodeJS, MongoDB.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="170"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  ReactJS, React Hooks, GrapgQL, Apollo
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  WeTube Project, This is making a WeTube App, built with CSS,
                  HTML, Javascript, NodeJS, MongoDB.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
