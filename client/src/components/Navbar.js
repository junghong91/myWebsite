import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import Footer from "./Footer";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  Comment,
} from "@material-ui/icons";
import avatar from "../avatar.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(5),
    heigth: theme.spacing(6),
  },
  listItem: {
    color: "tan",
  },

  logIn: {
    color: "tan",
    textDecoration: "none",
  },
  register: {
    color: "tan",
    textDecoration: "none",
    marginLeft: "1.5rem",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts",
  },
  {
    listIcon: <Comment />,
    listText: "Comments",
    listPath: "/comments",
  },
];

const Navbar = () => {
  const [state, setState] = useState({ right: false });
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(Cookies.get("token"));
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="hong" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleLogout = () => {
    Cookies.remove("token");
    window.location = "/"; // redirect to Home when logged out
  };

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography varient="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <Typography
              varient="h5"
              style={{ color: "tan", margin: "auto 1rem auto auto" }}
            >
              {token ? (
                <Link
                  varient="h5"
                  className={classes.logIn}
                  to="/"
                  onClick={handleLogout}
                >
                  Log out
                </Link>
              ) : (
                <Link varient="h5" className={classes.logIn} to="/user/login">
                  Log in
                </Link>
              )}
              <Link
                varient="h5"
                className={classes.register}
                to="/user/register"
              >
                {token ? "" : "Register"}
              </Link>
            </Typography>
            <MobilRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
