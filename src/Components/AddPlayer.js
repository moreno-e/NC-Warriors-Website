import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import { Container, Typography } from "@material-ui/core";
import AuthenticationService from "./AuthenticationService";
import { useHistory } from "react-router-dom";
import { LoggedInContext } from "../App.js";
import PlayerDataService from "../api/PlayerDataService";
import { useParams } from "react-router";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontFamily: "'Oswald', sans-serif",
    color: "rgb(214,214,214)",
  },
  form: {
    margin: "0",
    paddingBottom: ".2em",
    borderRadius: "5px",
    alignItems: "center",
    backgroundColor: "grey",
  },
  input: {
    color: "2EFF22",
  },
  label: {
    margin: "1em",
  },
  formItems: {
    display: "block",
    margin: "1em",
  },
}));



function AddPlayer() {
  const classes = useStyles();
  const history = useHistory();
  const [player, setPlayer] = useState({});
  //must have same name for destructoring
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // const validate = (value) =>{
  //   const errors ={};
  //   if(!value.team){
  //     errors.team = 'Required'
  //   } else if (value.team != "upper" || value.team != "lower"){
  //     errors.team = 'Please enter upper or lower'
  //   }

  //   return errors;
  // }

  useEffect(() => {
    if (id == -1) {
      setLoading(false);
      return;
    } else {
      PlayerDataService.getPlayer(id)
        .then((response) => {
          console.log(response.data);
          setPlayer(response.data);
          console.log("This is player" + player.firstName);

          console.log("This is player" + player.lastName);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      ...player,
    },
    
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("Submitting values " + values);
      if (id == -1) {
        PlayerDataService.addPlayer(values)
          .then(() => {
            console.log("Add Succes!");
            history.push("/DataFetching");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        PlayerDataService.updatePlayer(id, values)
          .then(() => {
            console.log("Update Success!");
            history.push("/DataFetching");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  });

  return loading ? (
    <span>loading...</span>
  ) : (
    <Container className={classes.container}>
      <Typography className={classes.heading} variant="h3">
        Player Member Form
      </Typography>
      <div>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            className={classes.formItems}
            label="First Name"
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />

          <TextField
            className={classes.formItems}
            label="Last Name"
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />

          <TextField
            className={classes.formItems}
            label="Jersey Number"
            type="text"
            id="jerseyNumber"
            name="jerseyNumber"
            onChange={formik.handleChange}
            value={formik.values.jerseyNumber}
          />

          <TextField
            className={classes.formItems}
            label="Phone Number"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
          <TextField
            className={classes.formItems}
            label="Email"
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <TextField
            className={classes.formItems}
            label="Upper or Lower"
            type="text"
            id="team"
            name="team"
            onChange={formik.handleChange}
            value={formik.values.team}
          />
          
          {/* {formik.errors.team ? <div>{formik.errors.team}</div> : null} */}

        

          <TextField
            className={classes.formItems}
            label="Position"
            type="text"
            id="position"
            name="position"
            onChange={formik.handleChange}
            value={formik.values.position}
          />

          <Button
            className={classes.formItems}
            variant="contained"
            color="primary"
            type="submit"
            InputProps={{
              className: classes.input,
            }}
          >
            Submit !
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default AddPlayer;
