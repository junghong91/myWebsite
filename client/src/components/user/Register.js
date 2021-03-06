import React, { useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Container,
} from "@material-ui/core";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import HowToReg from "@material-ui/icons/HowToReg";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "#233",
    height: "100vh",
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#344",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
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

const Register = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      password2,
    };
    console.log(newUser);
    axios
      .post("/api/users/register", newUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(`Error: ${err}`));
  };

  return (
    <Box className={classes.mainContainer}>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <HowToReg />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: "tomato" }}>
            Register
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
            <InputField
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Your Name (ID)"
              name="name"
              inputProps={{ style: { color: "white" } }}
            />
            <InputField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              inputProps={{ style: { color: "white" } }}
            />
            <InputField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputProps={{ style: { color: "white" } }}
            />
            <InputField
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Verify Password"
              type="password"
              id="password2"
              autoComplete="current-password"
              inputProps={{ style: { color: "white" } }}
            />
            <FormControlLabel
              control={
                <Checkbox value="remember" style={{ color: "tomato" }} />
              }
              label="Remember me"
              style={{ color: "tomato" }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#344", color: "white" }}
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#24292e", color: "white" }}
              className={classes.submit}
              startIcon={<GitHubIcon />}
            >
              Continue with Github
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#4267B2", color: "white" }}
              className={classes.submit}
              startIcon={<InstagramIcon />}
            >
              Continue with Instagram
            </Button>
          </form>
        </div>
      </Container>
    </Box>
  );
};

export default Register;
