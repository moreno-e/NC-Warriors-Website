import NavBar from "./NavBar";
import "fontsource-roboto";
import { Typography, Container } from "@material-ui/core";
import Images from "./ImageSlider";
import { SliderData } from "./SliderData";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Benner from "../Images/Benner.jpg";
import "fontsource-roboto";
import Footer from "../Footer";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgb(242, 242, 242)",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  heading1: {
    fontFamily: "roboto",
  },
  heading1: {
    fontWeight: "bold",
    fontSize: 32,
  },
  p2: {
    fontStyle: "italic",
  },
  title: {
    fontFamily: "roboto",
    fontStyle: "italic",
    fontWeight: "lite",
    fontSize: 75,
    marginTop: 20,
    textAlign: "center",
  },
  footer: {
    padding: "3px",
    backgroundColor: "black",
  },
  image: {},
}));

function Home() {
  const classes = useStyles();

  return (
    <Box style={{ backgroundColor: "rgb(204, 204, 204)" }}>
      <Container>
        <div className={classes.root}>
          <div>
            <Typography className={classes.title} variant="h1">
              Welcome to the N.C. Warriors Hockey Program
            </Typography>
          </div>

          <br />

          <hr style={{ width: 1100 }}></hr>

          <Grid container spacing={10} style={{ height: "100vh" }}>
            <Grid item xs={6} style={{ marginTop: 50 }}>
              <Typography className={classes.heading1} variant="h2">
                An All Disabled Veteran Hockey Team
              </Typography>
              <Typography
                className={classes.typography}
                variant="h2"
                style={{ fontSize: 25 }}
              >
                Est. 2019 Raleigh, N.C.
              </Typography>
              <p>
                The North Carolina Warriors Ice Hockey Program is a disabled
                veterans ice hockey team that exists to benefit disabled
                veterans from the United States Military Services. They are one
                of 21 USA Hockey Warriors teams in the nation.
              </p>
              <p>
                Each and every one of these teams exist with the focus of
                providing an athletic outlet, with a sense of therapy and
                comradery for it’s members. The team consists of veterans that
                have service rated disabilities that can, and do, include
                physical disabilities that include surgically rebuilt limbs,
                non-fully functional appendages, and other physical challenges
                that have become the players new norm.
              </p>
              <p>
                This however, does not, and will not keep the Warriors from
                enjoying the game they love. These hockey players on the North
                Carolina Warriors Ice Hockey team roster ranges from having
                played for many years to veteran’s who are interested in trying
                hockey for the first time and this range evokes the training and
                teamwork that these Veterans value so much.
              </p>
              <p className={classes.p2}>
                “We are excited to be on the Warriors because hockey is a
                fellowship game and in hockey, games are won and lost because of
                teamwork. There's no bigger fraternity in the world than the US
                Military and teamwork is also a key component of mission
                success. Stack the two together and you have something more
                intimate and fraternal.”
              </p>
              <p>#20 John Rodgers - Lower Team Captain</p>
            </Grid>

            <Grid
              item
              xs={6}
              style={{
                marginTop: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h2" style={{ fontSize: 30 }}>
                This Weeks Player Spot Light!
              </Typography>

              <Card style={{ width: "50%", marginLeft: "25%" }}>
                <CardMedia
                  component="img"
                  image={Benner}
                  style={{ height: "50%" }}
                />
                <CardContent>This is wayne!</CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>

      {/* 

      <Container>
        <Images slides={SliderData}></Images>
      </Container>
            <div class="fb-page" data-href="https://www.facebook.com/NorthCarolinaWarriors/" data-tabs="timeline" data-width="1000" data-height="700" 
                data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/NorthCarolinaWarriors/" class="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/NorthCarolinaWarriors/">North Carolina Warriors Hockey</a>
                </blockquote>
            </div>  
            */}
    </Box>
  ); //EOR
}

export default Home;
