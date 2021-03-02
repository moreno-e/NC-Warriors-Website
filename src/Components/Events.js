import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SimpleImageSlider from "react-simple-image-slider";
import images from "../DataFiles/2020Images.js";
import Grid from "@material-ui/core/Grid";
import gameStats from "../DataFiles/2020GameStats.js";
import gameStats2019 from "../DataFiles/2019GameStats";
import images2019 from "../DataFiles/2019Images.js";
import imagesPNC from "../DataFiles/HeaderImages.js";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import shipLogo from "../Images/WarriorsShip.png";
import Image from "material-ui-image";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
  },
  grid: {
    backgroundColor: "rgb(27, 27, 27)",
    paddingBottom: "30px",
  },
  gridItem: {
    marginBottom: "50px",
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
  },
  shipLogo: {
    backgroundColor: "rgb(27, 27, 27)",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },

  slider: {   
    backgroundColor: "rgb(27, 27, 27)",
    paddingTop: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  estText: {
    color: "rgb(214,214,214)",
    paddingTop: "8.5em",
    fontFamily: "'Open Sans', sans-serif",
    textAlign: "center",
    opacity: "0.3",    
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  paragraph: {
    fontSize: "30px",
  },
  yearDescription: {
    paddingLeft: "40px",
    marginBottom: "50px",
    backgroundColor: "rgb(27, 27, 27)",
    color: "rgb(214,214,214)",
    textDecoration: "underline",
    fontFamily: "'Oswald', sans-serif",
    fontSize: "50px",
  }, 
  paper: {
    paddingTop: "10px",
    paddingLeft: "10px",
    width: "80%",
    height: "auto",
  },
  card: {
    width: "425px",
    backgroundColor: "rgb(27, 27, 27)",
    color: "rgb(214,214,214)",
    border: "1px solid",
    display: "block",
    minHeight:"420px",
    marginBottom: "15px" 
  },
  overrideCardHeading: {
    ...theme.typography.fontFamily,
    fontFamily: "'Oswald', sans-serif",
    fontWeight: "bold",
    paddingBottom: "10px",
  },
  overrideCardBody: {
    ...theme.typography.fontFamily,
    fontFamily: "'Open Sans', sans-serif",
  },
}));

function Events() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="xl" className={classes.root}>
        <Grid
          className={classes.grid}
          container
          justify="space-around"
          alignItems="flex-start"
          spacing={0}
        >
          <Grid item xs={3} className={classes.shipLogo}>
            <Image
              color="rgb(27, 27, 27)"
              imageStyle={{
                width: "auto",
                height: "70%",
                padding: "12em 6em",
                opacity: "0.5",
              }}
              src={shipLogo}
            ></Image>
          </Grid>

          <Grid item xs={6} className={classes.slider}>
            <SimpleImageSlider
              className="slider1"
              navStyle={2}
              width={900}
              height={600}
              images={imagesPNC}
              showNavs={true}
              showBullets={true}
              slideDuration={0.7}
            />
          </Grid>

          <Grid item xs={3}>
            <Typography variant="h4" className={classes.estText}>
              <b>
                EST.<br></br> 2019
              </b>
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography
            className={classes.yearDescription}
            variant="h4"
            align="center"
          >
            NC Warriors 2020 Games and Tournaments
          </Typography>
        </Grid>

        <Grid
          className={classes.grid}
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
          spacing={0}
        >
          {gameStats.map((data, index) => (
            <Grid item>
              <Card
                className={classes.card}                
              >
                <CardActionArea>
                  <SimpleImageSlider
                    style={{ justifyContent: "center" }}
                    navStyle={2}
                    width={425}
                    height={250}
                    images={images[index]}
                    showNavs={true}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      className={classes.overrideCardHeading}
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      {data.match}
                    </Typography>
                    <Typography
                      className={classes.overrideCardBody}
                      variant="body2"
                    >
                      {data.date}
                    </Typography>
                    <Typography
                      className={classes.overrideCardBody}
                      variant="body2"
                    >
                      {data.location}
                    </Typography>
                    <Typography
                      className={classes.overrideCardBody}
                      variant="subtitle2"
                      align="center"
                    >
                      <br></br>
                      {data.warriors} - {data.opponent}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography
          className={classes.yearDescription}
          variant="h4"
          align="center"
        >
          NC Warriors 2019 Games and Tournaments
        </Typography>
        <Grid
          className={classes.grid}
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
          spacing={0}
        >
          {gameStats2019.map((data, index) => (
            <Grid item>
              <Card
                className={classes.card}
                style={{ }}
              >
                <CardActionArea>
                  <SimpleImageSlider
                    style={{ justifyContent: "center" }}
                    navStyle={2}
                    width={425}
                    height={250}
                    images={images2019[index]}
                    showNavs={true}
                  />
                  <CardContent>
                    {Object.keys(data.match).map((index) => (
                      <>
                        <Typography
                          className={classes.overrideCardHeading}
                          gutterBottom
                          variant="h5"
                          component="h2"
                          align="center"
                        >
                          {data.match[index].game}
                        </Typography>

                        <Typography
                          className={classes.overrideCardBody}
                          variant="subtitle1"
                        >
                          {data.location}
                        </Typography>

                        <Typography
                          className={classes.overrideCardBody}
                          variant="body2"
                        >
                          {data.match[index].description}
                        </Typography>

                        <Typography
                          className={classes.overrideCardBody}
                          variant="body2"
                        >
                          {data.date}
                        </Typography>
                        <br></br>
                        <Typography
                          className={classes.overrideCardBody}
                          align="center"
                          variant="subtitle2"
                          
                        >
                          {data.match[index].warriors} -
                          {data.match[index].opponent}
                        </Typography>
                      </>
                    ))}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Events;
