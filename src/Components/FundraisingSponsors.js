import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import OHT from "../Images/OHT.png";
import Edge from "../Images/Edge.png";
import CSAH from "../Images/CSAH.png";
import WarriorsOHT from "../Images/WarriorsOHT.jpg";
import Button from "@material-ui/core/Button";
import Image from "material-ui-image";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "rgb(27, 27, 27)",
    color: "rgb(214,214,214)",
  },
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  center: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  leftHeading: {
    textAlign: "center",
    paddingBottom: "30px",
    paddingTop: "30px",
    fontFamily: "'Oswald', sans-serif",
  },
  rightHeading: {
    textAlign: "center",
    paddingTop: "30px",
    paddingBottom: "15px",
    fontFamily: "'Oswald', sans-serif",
  },
  sponsorNames: {
    textAlign: "center",
    textDecoration: "underline",
  },
  pbutton: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  root: {
    flexGrow: 1,
    backgroundColor: "rgb(242, 242, 242)",
  },
  overrideSponsorHeading: {
    ...theme.typography.fontFamily,
    fontFamily: "'Open Sans', sans-serif",
    textAlign: "center",
    textDecoration: "underline",
    padding: ".5em",
  },

  overrideSponsorBody: {
    ...theme.typography.fontFamily,
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "20px",
    paddingBottom: "30px",
  },
  imgHide: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

function FundraisingSponsors() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Grid
        className={classes.grid}
        container
        display="flex"
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        spacing={1}
      >
        <Grid item xs={6}>
          <Typography className={classes.leftHeading} variant="h3">
            Our Amazing Sponsors
          </Typography>

          <div style={{ display: "flex" }}>
            <div style={{ float: "left" }}>
              <img src={OHT} className={classes.imgHide}></img>
            </div>
            <div>
              <Typography
                className={classes.overrideSponsorHeading}
                variant="h5"
              >
                Operation Hat Trick
              </Typography>
              <p style={{ textAlign: "center" }}>
                <Typography
                  className={classes.overrideSponsorBody}
                  variant="h6"
                >
                  “Operation Hat Trick generates awareness and support for the
                  recovery of wounded service members and veterans through the
                  sale of OHT branded merchandise and products, proceeds of
                  which are donated to selected organizations that fulfill the
                  OHT mission”
                </Typography>

                <Button
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
                  href="https://operationhattrick.org/"
                >
                  Support Operation Hat Trick
                </Button>
              </p>
            </div>
          </div>

          <hr></hr>

          <div style={{ display: "flex" }}>
            <p style={{ float: "left" }}>
              <img
                className={classes.imgHide}
                src={Edge}
                style={{
                  height: "127px",
                  width: "256px",
                  margin:"55px 0"
                }}
              ></img>
            </p>

            <div>
              <Typography
                className={classes.overrideSponsorHeading}
                variant="h5"
              >
                EDGE - PRINTED PRODUCTS
              </Typography>
              <p style={{ textAlign: "center" }}>
                <Typography className={classes.overrideSponsorBody}>
                  Edge Printed Products is a full scale Screen Printing,
                  Embroidery, Signage and E-Commerce fulfillment shop dedicated
                  to providing high quality products with industry leading
                  turnaround times."
                  <br></br>Custom apparel - Customer Service - Lower Costs - No
                  Minimums
                </Typography>

                <Button
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
                  href="https://www.printedproducts.com/"
                >
                  Support Edge - Printed Products
                </Button>
              </p>
            </div>
          </div>
          <hr></hr>

          <div style={{ display: "flex" }}>
            <p style={{ float: "left" }}>
              <img
                className={classes.imgHide}
                src={CSAH}
                style={{
                  height: "250px",
                  width: "250px",
                  margin:"55px 0"
                }}
              ></img>
            </p>
            <div>
              <Typography
                className={classes.overrideSponsorHeading}
                variant="h5"
              >
                COALITION TO SALUTE AMERICA'S HEROES
              </Typography>
              <p style={{ textAlign: "center" }}>
                <Typography className={classes.overrideSponsorBody}>
                  "The mission of the Coalition to Salute America’s Heroes is to
                  help severely-wounded veterans and families of Operation
                  Enduring Freedom, Operation Iraqi Freedom, and Operation New
                  Dawn recover from their injuries and illnesses, and to inspire
                  other organizations and the general public to participate in
                  this effort." "Through our programs of aid and assistance, the
                  Coalition offers individual contributors, corporations and
                  volunteers many ways to give so these veterans and their
                  families receive what they need and deserve in return for the
                  sacrifices they made for us."
                </Typography>

                <Button
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
                  href="https://saluteheroes.org/"
                >
                  Support Coalition to Salute America's Heroes
                </Button>
              </p>
            </div>
          </div>
        </Grid>

        <Grid item sm={4}>
          <Typography className={classes.rightHeading} variant="h3">
            Looking to Donate?
          </Typography>
          <p style={{ textAlign: "center" }}>
            <div>
              <Typography className={classes.overrideSponsorBody}>
                We are in the process of raising funds to help purchase more ice
                time, equipment, travel and other essentials for the North
                Carolina Warriors Hockey Program. We've been growing and working
                with our players and need more ice time and more bonding time to
                give these disabled veterans the relief they are needing. This
                program has helped so many veterans thus far and receiving more
                money to give the program more ice time is only going to further
                improve their quality of life and help them cope with the stress
                of daily living. We've currently obtained 2 sponsors, and
                numerous donations, but when funding ice, equipment, and travel
                for 35 disabled veterans it doesn't take long to start using up
                all that money. All the money we raise will go directly back
                into this program and help us obtain more ice time, set up more
                charity games, and start working on projects to help give back
                to the community. If you know of anyone who would be interested
                in becoming a sponsor or would like to be a part of the team
                please reach out to us at
                <b> travis.harris@northcarolinawarriors.com</b>
              </Typography>
            </div>
         
          <div>
            <Button
              className={classes.button}
              variant="outlined"
              color="secondary"
              href="https://www.facebook.com/donate/391367195112463/"
            >
              Click here to donate
            </Button>
          </div>
          </p>
          <br></br>
          <img
            className={classes.center}
            src={WarriorsOHT}
            height="375"
            width="375"
          ></img>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FundraisingSponsors;
