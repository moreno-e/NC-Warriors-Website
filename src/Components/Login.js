import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import Input from "@material-ui/core/Input";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container:{
    display: "flex",
    alignItems: "center"
  }
  ,
  
  
    form: {
    backgroundColor: "white",
    margin: "1em",
    borderRadius: "5px",
    alignItems: "center",
    
 
  },
  label: {
    margin: "1em",
  },
  formItems:{
    display: "block",
    margin: "1em"
  }
}));

function Login() {
  const classes = useStyles();
    



  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik.values);

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
       

       
        <Button className={classes.formItems} variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
 
}

export default Login;
