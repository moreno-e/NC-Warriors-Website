import React, { useState, useEffect, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {  useFormik } from "formik";
import { Container } from "@material-ui/core";
import AuthenticationService from "./AuthenticationService";
import { useHistory } from "react-router-dom";
import { LoggedInContext } from "../App.js";


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
  },

  form: {
    backgroundColor: "white",
    margin: "1em",
    borderRadius: "5px",
    alignItems: "center",
  },
  label: {
    margin: "1em",
  },
  formItems: {
    display: "block",
    margin: "1em",
  },
}));

function Login() {
  const classes = useStyles();
  const [loginFailed, setLoginFailed] = useState();
  const history = useHistory();

  const setLoggedIn = useContext(LoggedInContext)


  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      AuthenticationService
        // passes credentials to backend and returns, if valid, token
        .executeJwtAuthenticationService(values.username, values.password)
        .then((response) => {
          //passes the name and token for furth http request
          AuthenticationService.registerSuccessfulLoginForJwt(
            values.username,
            response.data.token
          );
          setLoggedIn(true)
        })
        .then(() =>{
          history.push("/DataFetching");
        })
        .catch(() => {
          setLoginFailed(true);
        });
    },
  });

  useEffect(() => {}, [loginFailed]);

  return (
    <Container className={classes.container}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          className={classes.formItems}
          label="Username"
          type="text"
          id="username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />

        <TextField
          className={classes.formItems}
          label="Password"
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <Button
          className={classes.formItems}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Login;
