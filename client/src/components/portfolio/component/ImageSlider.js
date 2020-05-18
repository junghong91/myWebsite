import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    maxWidth: "100%",
    flexGrow: 1,
    backgroundColor: "black",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: "15% !important",
    paddingLeft: theme.spacing(4),
    backgroundColor: "transparent",
  },
  img: {
    height: "70%",
    maxWidth: "100%",
    overflow: "hidden",
    display: "block",
    width: "100%",
    boxSizing: "borderBox",
  },
  stepper: {
    backgroundColor: "red",
    color: "tan",
    height: "15% !important",
  },
}));

const TextMobileStepper = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { image } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = image.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography style={{ color: "tomato" }}>
          {image[activeStep].label}
        </Typography>
      </Paper>
      <img
        className={classes.img}
        src={image[activeStep].imgPath}
        alt={image[activeStep].label}
      />
      <MobileStepper
        className={classes.stepper}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            style={{ color: "tan" }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            style={{ color: "tan" }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
};

export default TextMobileStepper;
