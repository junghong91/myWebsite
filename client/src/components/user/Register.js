import React from "react";
import Navbar from "../Navbar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import HowToReg from "@material-ui/icons/HowToReg";
import FacebookIcon from "@material-ui/icons/Facebook";
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
          <form className={classes.form} noValidate>
            <InputField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Your Name(ID)"
              name="name"
              inputProps={{ style: { color: "white" } }}
            />
            <InputField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              inputProps={{ style: { color: "white" } }}
            />
            <InputField
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
                <Checkbox
                  value="remember"
                  color="tomato"
                  style={{ color: "tomato" }}
                />
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
              startIcon={<FacebookIcon />}
            >
              Continue with Facebook
            </Button>
          </form>
        </div>
      </Container>
    </Box>
  );
};

export default Register;
