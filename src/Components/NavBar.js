import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useHistory } from "react-router-dom";
import { Typography, useTheme } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 0,
    marginBottom: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {

    color: "white",
    fontStyle: "'Open Sans', sans-serif",
  },
  fontStyling: {
    fontStyle: "'Open Sans', sans-serif",
  },
 
}));

function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    // when menu is clicked set menus where mouse it
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (pageURL) => {
    // when item is clicked closes menu
    history.push(pageURL);
    setAnchorEl(null);
  };

  function handleButtonClick(pageURL) {
    history.push(pageURL);
  }

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/",
    },
    {
      menuTitle: "Player Profiles",
      pageURL: "/PlayerProfiles",
    },
    {
      menuTitle: "Events",
      pageURL: "/Events",
    },
    {
      menuTitle: "Fundraising & Sponors",
      pageURL: "/FundraisingSponsors",
    },
    {
      menuTitle: "Store",
      href: "https://stores.inksoft.com/ncwarriorshockey/shop/home",
    },
    {
      menuTitle: "New Player Form",
      href:
      "https://docs.google.com/forms/d/e/1FAIpQLScg7QnXVUhoXJFNv27DcjpOlDAPkhny3q7JnGS2pIdJNoTvKQ/viewform",
    },
  ];

  const buttonItems = [
    {
      buttonTitle: "Home",
      pageURL: "/",
    },
    {
      buttonTitle: "Player Profiles",
      pageURL: "/PlayerProfiles",
    },
    {
      buttonTitle: "Events",
      pageURL: "/Events",
    },
    {
      buttonTitle: "Fundraising & Sponsors",
      pageURL: "/FundraisingSponsors",
    },
    {
      buttonTitle: "Store",
      href: "https://stores.inksoft.com/ncwarriorshockey/shop/home",
    },
    {
      buttonTitle: "New Player Form",
      href:
        "https://docs.google.com/forms/d/e/1FAIpQLScg7QnXVUhoXJFNv27DcjpOlDAPkhny3q7JnGS2pIdJNoTvKQ/viewform",
    },
  ];

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="relative" style={{ backgroundColor: "black" }}>
          <Toolbar>
            {isMobile ? 
            (
              <>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  {menuItems.map((menuItem) => {
                    const { menuTitle, pageURL, href } = menuItem;
                    return (
                      <MenuItem 
                      component='a'
                      href={href} 
                      onClick={() => handleMenuClose(pageURL)}>
                        {menuTitle}
                      </MenuItem>
                    );
                  })}
                </Menu>{" "}
              </>
            ) 
            : 
            (
              <>
                {buttonItems.map((buttonItem) => {
                  const { buttonTitle, pageURL, href } = buttonItem;
                  return (
                    <Button
                      color="secondary"
                      onClick={() => handleButtonClick(pageURL)}
                      href={href}
                      className={classes.button}
                    >
                      <Typography className={classes.fontStyling}>
                        {buttonTitle}
                      </Typography>
                    </Button>
                  );
                })}
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default NavBar;
