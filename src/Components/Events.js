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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
  },
  grid: {
    backgroundColor: "rgb(27, 27, 27)",
    paddingBottom: "50px",
  },
  gridItem: {
    marginBottom: "50px",
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    paddingTop: "30px",
    paddingBottom: "40px",
    backgroundColor: "rgb(27, 27, 27)",
    color: "rgb(214,214,214)",
  },
  paragraph: {
    fontSize: "30px",
  },
  yearDescription: {
    paddingLeft: "40px",
    marginBottom: "60px",
    backgroundColor: "rgb(27, 27, 27)",
    color: "rgb(214,214,214)",
    textDecoration: "underline",
    fontFamily: "'Oswald', sans-serif",
    fontSize: "50px",
  },
  listItem: {
    fontSize: "20px",
  },
  paper: {
    paddingTop: "10px",
    paddingLeft: "10px",
    width: "80%",
    height: "auto",
  },
  slider: {
    justifyContent: "center",
    display: "flex",
    backgroundColor: "rgb(27, 27, 27)",
    paddingTop: "20px",
    paddingBottom: "50px",
  },
  card: {
    maxWidth: "22%",
    backgroundColor: "rgb(27, 27, 27)",
    color: "rgb(214,214,214)",
    border: "1px solid",
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
        <div className={classes.slider}>
          <SimpleImageSlider
            navStyle={2}
            width={900}
            height={600}
            images={imagesPNC}
            showNavs={true}
            showBullets={true}
            slideDuration={0.7}
          />
        </div>

        <Typography
          className={classes.yearDescription}
          variant="h4"
          align="center"
        >
          NC Warriors 2020 Games and Tournaments
        </Typography>

        <Grid
          className={classes.grid}
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
          spacing={0}
        >
          {gameStats.map((data, index) => (
            <Card className={classes.card} style={{ height: "50vh" }}>
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
                   
                  >
                    {data.match}
                  </Typography>
                  <Typography className={classes.overrideCardBody} variant="body2">{data.date}</Typography>
                  <Typography className={classes.overrideCardBody} variant="body2">{data.location}</Typography>
                  <Typography className={classes.overrideCardBody} variant="subtitle2" align="center">
                    <br></br>
                    {data.warriors} - {data.opponent}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
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
            <Card
              className={classes.card}
              style={{ height: "53vh", marginBottom: "15px" }}
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
                      <Typography className={classes.overrideCardHeading} gutterBottom variant="h5" component="h2">
                        {data.match[index].game}
                      </Typography>

                      <Typography className={classes.overrideCardBody} variant="subtitle1">
                        {data.location}
                      </Typography>

                      <Typography className={classes.overrideCardBody} variant="body2">
                        {data.match[index].description}
                      </Typography>

                      <Typography className={classes.overrideCardBody} variant="body2">{data.date}</Typography>
                      <br></br>
                      <Typography className={classes.overrideCardBody} style={{alignItems: "flex-end"}} variant="subtitle2">
                        {data.match[index].warriors} -{" "}
                        {data.match[index].opponent}
                      </Typography>
                    </>
                  ))}
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Events;
