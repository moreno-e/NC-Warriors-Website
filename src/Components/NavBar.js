import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AboutMenu from "./AboutMenu";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12,
  }
}));

function NavBar(){
    const classes = useStyles();
    return(
      
        <div>
          
          
            <div className={classes.root}>
              <AppBar position="static"  style={{background:'black'}}
              >
                  <Toolbar style={{flexGrow: 1}}>  

                    <List style={{display: "flex"}}>
                      <ListItem >About</ListItem>
                      <ListItem>Player Profile</ListItem>
                      <ListItem>Events</ListItem>
                      <ListItem>Sponsors</ListItem>
                      <ListItem>Stores</ListItem>                    
                    </List>   

                    <Button className={classes.rightToolbar} color="inherit">Player Login</Button>             
                     
                      
                    
                  </Toolbar>
              </AppBar>
            </div>
        </div>
       
    );

}

export default  NavBar