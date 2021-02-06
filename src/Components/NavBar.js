import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 0,
    marginBottom: 0,
  },
  rightToolbar: {
    marginLeft: "auto",
  },
  button: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();
  let history = useHistory();

  function handleButtonClick(pageURL) {
    history.push(pageURL);
  }

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="relative" style={{ backgroundColor: "black" }}>
          <Toolbar>
            <Button
              color="secondary"
              onClick={() => handleButtonClick("/")}
              style={{ color: "white" }}
            >
              Home
            </Button>

            <Button
              c
              color="secondary"
              onClick={() => handleButtonClick("/PlayerProfiles")}
              style={{ color: "white" }}
            >
              Player Profiles
            </Button>
            <Button
              c
              color="secondary"
              onClick={() => handleButtonClick("/Events")}
              style={{ color: "white" }}
            >
              Events
            </Button>
            <Button
              c
              color="secondary"
              onClick={() => handleButtonClick("/FundraisingSponsors")}
              style={{ color: "white" }}
            >
              Fundraising & Sponsors
            </Button>
            <Button
              c
              color="secondary"
              onClick={() => handleButtonClick("/Store")}
              style={{ color: "white" }}
            >
              Store
            </Button>
            <Button
              c
              color="secondary"
              onClick={() => handleButtonClick("/NewPlayerForm")}
              style={{ color: "white" }}
            >
              New Player Form
            </Button>

            <Typography className={classes.button}></Typography>

            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleButtonClick("/Login")}
              style={{ color: "white" }}
            >
              Player Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default NavBar;
