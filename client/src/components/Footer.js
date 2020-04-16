import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import GitHub from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: "0",
      maxWidth: "250px"
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem"
      }
    }
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <BottomNavigation width="auto" style={{ background: "#222" }}>
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<Facebook />}
        ></BottomNavigationAction>
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<Instagram />}
        ></BottomNavigationAction>
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<GitHub />}
        ></BottomNavigationAction>
      </BottomNavigation>
    </div>
  );
};

export default Footer;
