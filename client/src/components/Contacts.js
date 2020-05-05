import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contacts = () => {
  const classes = useStyles();
  const token = Cookies.get("token");
  const [useremail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .get("/api/users/current", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        setUserEmail(res.data.email);
        setUsername(res.data.username);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, [useremail, username]);

  return (
    <>
      {token ? (
        <Box component="div" style={{ background: "#233", height: "100vh" }}>
          <Navbar />
          <Grid container justify="center">
            <Box component="form" className={classes.form}>
              <Typography
                variant="h5"
                style={{
                  color: "tomato",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Contact Me
              </Typography>
              <InputField
                fullWidth={true}
                label="Name"
                variant="outlined"
                inputProps={{ style: { color: "white" } }}
                margin="dense"
                size="medium"
              />
              <br />
              <InputField
                fullWidth={true}
                label="Email"
                variant="outlined"
                inputProps={{ style: { color: "white" } }}
                margin="dense"
                size="medium"
              />
              <br />
              <InputField
                fullWidth={true}
                label="Company Name"
                variant="outlined"
                inputProps={{ style: { color: "white" } }}
                margin="dense"
                size="medium"
              />
              <br />
              <Button
                className={classes.button}
                variant="outlined"
                fullWidth={true}
                endIcon={<SendIcon />}
              >
                Contact Me
              </Button>
            </Box>
          </Grid>
        </Box>
      ) : (
        <Box>
          <Grid>Please Login First</Grid>
        </Box>
      )}
    </>
  );
};

export default Contacts;
