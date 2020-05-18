import React from "react";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    height: 240,
    width: "20%",
    flexGrow: 1,
    maxWidth: 250,
    color: "tan",
    opacity: 0.4,
  },
});

const PorfolioNavbar = () => {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      defaultExpanded={["1", "11", "12"]}
    >
      <TreeItem
        nodeId="1"
        label={<span style={{ fontSize: "1.5rem" }}>Web Programming</span>}
      >
        <TreeItem nodeId="11" label="Skills">
          <TreeItem nodeId="111" label="Language">
            <TreeItem nodeId="1111" label="Javascript"></TreeItem>
            <TreeItem nodeId="1112" label="Python"></TreeItem>
            <TreeItem nodeId="1113" label="C++"></TreeItem>
          </TreeItem>
          <TreeItem nodeId="112" label="Framework">
            <TreeItem nodeId="1121" label={<Link>NodeJS</Link>}></TreeItem>
            <TreeItem nodeId="1122" label={<Link>Express</Link>}></TreeItem>
            <TreeItem nodeId="1123" label={<Link>React</Link>}></TreeItem>
            <TreeItem nodeId="1124" label={<Link>BootStrap</Link>}></TreeItem>
            <TreeItem nodeId="1125" label={<Link>Material UI</Link>}></TreeItem>
            <TreeItem nodeId="1126" label={<Link>NPM</Link>}></TreeItem>
          </TreeItem>
          <TreeItem nodeId="113" label="DataBase">
            <TreeItem nodeId="1131" label="MongoDB"></TreeItem>
            <TreeItem nodeId="1132" label="MySQL"></TreeItem>
            <TreeItem nodeId="1133" label="GraphQL"></TreeItem>
          </TreeItem>
        </TreeItem>
        {/* projects */}
        <TreeItem nodeId="12" label="Projects">
          <TreeItem
            nodeId="121"
            label={
              <Link
                activeClass="active"
                to="wetube"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Wetube
              </Link>
            }
          ></TreeItem>
          <TreeItem
            nodeId="122"
            label={
              <Link
                activeClass="active"
                to="guessmind"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                GuessMind
              </Link>
            }
          ></TreeItem>
          <TreeItem
            nodeId="123"
            label={
              <Link
                activeClass="active"
                to="mernblog"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Blog App MERN Stack
              </Link>
            }
          ></TreeItem>
          <TreeItem
            nodeId="124"
            label={
              <Link
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                ImageUploader
              </Link>
            }
          ></TreeItem>
          <TreeItem
            nodeId="125"
            label={
              <Link
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                MovieApp
              </Link>
            }
          ></TreeItem>
          <TreeItem
            nodeId="126"
            label={
              <Link
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                CSS Master
              </Link>
            }
          ></TreeItem>
          <TreeItem
            nodeId="127"
            label={
              <Link
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                MyHooks
              </Link>
            }
          ></TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
};

export default PorfolioNavbar;
