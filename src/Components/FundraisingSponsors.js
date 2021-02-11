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
  root: {
    flexGrow: 1,
    backgroundColor: "rgb(242, 242, 242)",
  },
  heading: {
    textAlign: "center",
    paddingBottom: "30px",
    paddingTop: "30px",
  },
  heading1: {
    textAlign: "center",
    paddingTop: "30px",
  },
  names: {
    textAlign: "center",
    textDecoration: "underline",
  },
  button: {
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  pbutton: {
    display: "flex",
    justifyContent: "center",
  },
  center: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

function FundraisingSponsors() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Grid
        container
        display="flex"
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        conatiner
        spacing={1}
        style={{ backgroundColor: "rgb(242, 242, 242)" }}
      >
        <Grid item xs={6}>
          <Typography className={classes.heading} variant="h3">
            Our Amazing Sponsors
          </Typography>

          <div>
            <p style={{ float: "left" }}>
              <img src={OHT}></img>
            </p>

            <Typography className={classes.names} variant="h5">
              Operation Hat Trick
            </Typography>

            <p style={{ textAlign: "center" }}>
              “Operation Hat Trick generates awareness and support for the
              recovery of wounded service members and veterans through the sale
              of OHT branded merchandise and products, proceeds of which are
              donated to selected organizations that fulfill the OHT mission”
            </p>

            <p className={classes.pbutton}>
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
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <hr></hr>

          <div style={{ clear: "left", marginBottom: "30px" }}>
            <p style={{ float: "left" }}>
              <img src={Edge} style={{ height: "200px", width: "250px" }}></img>
            </p>
            <Typography className={classes.names} variant="h5">
              EDGE - PRINTED PRODUCTS
            </Typography>
            <p style={{ textAlign: "center" }}>
              Edge Printed Products is a full scale Screen Printing, Embroidery,
              Signage and E-Commerce fulfillment shop dedicated to providing
              high quality products with industry leading turnaround times."
              <br></br> -Custom apparel<br></br> -Customer Service
              <br></br>-Lower Costs -No Minimums
            </p>
            <div className={classes.pbutton}>
              <Button
                className={classes.button}
                variant="outlined"
                color="secondary"
                href="https://www.printedproducts.com/"
              >
                Support Edge - Printed Products
              </Button>
            </div>
          </div>
          <hr></hr>

          <div style={{ clear: "left", marginBottom: "20px" }}>
            <p style={{ float: "left" }}>
              <img src={CSAH} style={{ height: "250px", width: "250px" }}></img>
            </p>
            <Typography className={classes.names} variant="h5">
              COALITION TO SALUTE AMERICA'S HEROES
            </Typography>
            <p style={{ textAlign: "center" }}>
              "The mission of the Coalition to Salute America’s Heroes is to
              help severely-wounded veterans and families of Operation Enduring
              Freedom, Operation Iraqi Freedom, and Operation New Dawn recover
              from their injuries and illnesses, and to inspire other
              organizations and the general public to participate in this
              effort." "Through our programs of aid and assistance, the
              Coalition offers individual contributors, corporations and
              volunteers many ways to give so these veterans and their families
              receive what they need and deserve in return for the sacrifices
              they made for us."
            </p>
            <div className={classes.pbutton}>
              <Button
                className={classes.button}
                variant="outlined"
                color="secondary"
                href="https://saluteheroes.org/"
              >
                Support Coalition to Salute America's Heroes
              </Button>
            </div>
          </div>
          <div></div>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.heading1} variant="h3">
            Looking to Donate?
          </Typography>
          <p style={{ textAlign: "center" }}>
            We are in the process of raising funds to help purchase more ice
            time, equipment, travel and other essentials for the North Carolina
            Warriors Hockey Program. We've been growing and working with our
            players and need more ice time and more bonding time to give these
            disabled veterans the relief they are needing. This program has
            helped so many veterans thus far and receiving more money to give
            the program more ice time is only going to further improve their
            quality of life and help them cope with the stress of daily living.
            We've currently obtained 2 sponsors, and numerous donations, but
            when funding ice, equipment, and travel for 35 disabled veterans it
            doesn't take long to start using up all that money. All the money we
            raise will go directly back into this program and help us obtain
            more ice time, set up more charity games, and start working on
            projects to help give back to the community. If you know of anyone
            who would be interested in becoming a sponsor or would like to be a
            part of the team please reach out to us at
            <b> travis.harris@northcarolinawarriors.com</b>
          </p>
          <div className={classes.pbutton}>
            <Button
              className={classes.button}
              variant="outlined"
              color="secondary"
              href="https://www.facebook.com/donate/391367195112463/"
            >
              Click here to donate
            </Button>
          </div>
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
