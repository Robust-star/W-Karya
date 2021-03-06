import { useContext, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";
import women from './images/favpng_businessperson-recruitment-sales-investor.png';

import PasswordInput from "../lib/PasswordInput";
import EmailInput from "../lib/EmailInput";
import { SetPopupContext } from "../App";

import apiList from "../lib/apiList";
import isAuth from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "60px 60px",
  },
  inputBox: {
    width: "300px",
  },
  submitButton: {
    width: "300px",
  },
  image: {
    height: "500px"
  },
  nature: {
    background: 'linear-gradient(to bottom,white, #FFEEE5,white)',
    borderRadius: "5% 5% 5% 5%"
  }
}));

const Login = (props) => {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);

  const [loggedin, setLoggedin] = useState(isAuth());

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [inputErrorHandler, setInputErrorHandler] = useState({
    email: {
      error: false,
      message: "",
    },
    password: {
      error: false,
      message: "",
    },
  });

  const handleInput = (key, value) => {
    setLoginDetails({
      ...loginDetails,
      [key]: value,
    });
  };

  const handleInputError = (key, status, message) => {
    setInputErrorHandler({
      ...inputErrorHandler,
      [key]: {
        error: status,
        message: message,
      },
    });
  };

  const handleLogin = () => {
    const verified = !Object.keys(inputErrorHandler).some((obj) => {
      return inputErrorHandler[obj].error;
    });
    if (verified) {
      axios
        .post(apiList.login, loginDetails)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", response.data.type);
          setLoggedin(isAuth());
          setPopup({
            open: true,
            severity: "success",
            message: "Logged in successfully",
          });
          console.log(response);
        })
        .catch((err) => {
          setPopup({
            open: true,
            severity: "error",
            message: err.response.data.message,
          });
          console.log(err.response);
        });
    } else {
      setPopup({
        open: true,
        severity: "error",
        message: "Incorrect Input",
      });
    }
  };

  return loggedin ? (
    <Redirect to="/" />
  ) : (
    <div className={classes.nature}>
      <Grid
        container
        item
        // direction="column"
        alignItems="center"

        justify="center"
        style={{ padding: "30px", paddingTop: "10px", width: "1000px" }}

      >
        <Grid item md={6} xs={12}>
          <img src={women} className={classes.image} alt="Logo" />
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper elevation={3} className={classes.body}>
            <Grid container direction="column" spacing={4} alignItems="center">
              <Grid item>
                <Typography variant="h3" component="h2">
                  Login
                </Typography>
              </Grid>
              <Grid item>
                <EmailInput
                  label="Email"
                  value={loginDetails.email}
                  onChange={(event) => handleInput("email", event.target.value)}
                  inputErrorHandler={inputErrorHandler}
                  handleInputError={handleInputError}
                  className={classes.inputBox}
                />
              </Grid>
              <Grid item>
                <PasswordInput
                  label="Password"
                  value={loginDetails.password}
                  onChange={(event) => handleInput("password", event.target.value)}
                  className={classes.inputBox}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleLogin()}
                  className={classes.submitButton}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>


    </div>
  );
};

export default Login;
