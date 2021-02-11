import React from "react";
import { Typography, Container, requirePropFactory } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SimpleImageSlider from "react-simple-image-slider";
import images from "../sasquatch.js";
import Grid from "@material-ui/core/Grid";
import gameStats from "../2020GameStats.js";
import gameStats2019 from "../2019GameStats";
import { FaDraft2Digital } from "react-icons/fa";
import Paper from "@material-ui/core/Paper";
import images2019 from "../2019Images.js";
import imagesPNC from "../HeaderImages.js";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
  },
  grid: {
    backgroundColor: "rgb(240, 240, 240)",
    paddingBottom: "50px",
  },
  gridItem: {
    marginBottom: "40px",

    display: "grid",
    justifyItems: "center",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    paddingTop: "30px",
    paddingBottom: "40px",
    backgroundColor: "rgb(240, 240, 240)",
  },
  paragraph: {
    fontSize: "30px",
  },
  yearDescription: {
    paddingLeft: "40px",
    paddingBottom: "50px",
    backgroundColor: "rgb(240, 240, 240)",
    textDecoration: "underline",
    fontFamily: "'Nunito Sans', sans-serif",
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
    backgroundColor: "rgb(240, 240, 240)",
    paddingTop: "20px",
    paddingBottom: "100px",
  },
  card: {
    maxWidth: "22%",
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
                  <Typography gutterBottom variant="h5" component="h2">
                    {data.match}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {data.date}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {data.location}
                  </Typography>
                  <Typography variant="subtitle2" align="center">
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
                      <Typography gutterBottom variant="h5" component="h2">
                        {data.match[index].game}
                      </Typography>

                      <Typography variant="subtitle1">
                        {data.location}
                      </Typography>

                      <Typography variant="body2" color="textSecondary">
                        {data.match[index].description}
                      </Typography>

                      <Typography variant="body2" color="textSecondary">
                        {data.date}
                      </Typography>
                      <br></br>
                      <Typography align="center" variant="subtitle2">
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
