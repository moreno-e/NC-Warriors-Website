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
  fontStyling:{
    fontStyle: "'Open Sans', sans-serif",
  }
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
        <AppBar position="relative" style={{ backgroundColor: "black", }}>
          <Toolbar>
            <Button
              color="secondary"
              onClick={() => handleButtonClick("/")}
              style={{ color: "white",fontStyle: "'Open Sans', sans-serif" }}
            >
              <Typography className={classes.fontStyling}>
              Home
              </Typography>
            </Button>

            <Button 
              className={classes.fontStyling}        
              color="secondary"
              onClick={() => handleButtonClick("/PlayerProfiles")}
              style={{ color: "white",fontStyle: "'Open Sans', sans-serif" }}

            >
              <Typography className={classes.fontStyling}>
              Player Profiles
              </Typography>
            </Button>
            <Button              
              color="secondary"
              onClick={() => handleButtonClick("/Events")}
              style={{ color: "white" }}
            >
              <Typography className={classes.fontStyling}>
              Events
              </Typography>
            </Button>
            <Button             
              color="secondary"
              onClick={() => handleButtonClick("/FundraisingSponsors")}
              style={{ color: "white" }}
            >
              <Typography className={classes.fontStyling}>
              Fundraising & Sponsors
              </Typography>
            </Button>
            <Button             
              color="secondary"
              href="https://stores.inksoft.com/ncwarriorshockey/shop/home"
              style={{ color: "white" }}
            >
              <Typography className={classes.fontStyling}>
              Store
              </Typography>
            </Button>
            <Button              
              color="secondary"
              href="https://docs.google.com/forms/d/e/1FAIpQLScg7QnXVUhoXJFNv27DcjpOlDAPkhny3q7JnGS2pIdJNoTvKQ/viewform"
              style={{ color: "white" }}
            >
              <Typography className={classes.fontStyling}>
              New Player Form
              </Typography>
            </Button>

            <Typography className={classes.button}></Typography>

            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleButtonClick("/Login")}
              style={{ color: "white" }}
            >
              <Typography className={classes.fontStyling}>
              Player Login
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default NavBar;
