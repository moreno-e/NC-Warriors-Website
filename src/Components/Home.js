import NavBar from "./NavBar";
import "fontsource-roboto";
import { Typography, Container } from "@material-ui/core";
import Images from "./ImageSlider";
import { SliderData } from "./SliderData";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./Home.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Image from "material-ui-image";
import Schmidt from "../Images/Schmidt.jpg";
import Benner from "../Images/Harris_Coach.jpg";
import "fontsource-roboto";
import Footer from "../Footer";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Team from "../Images/WarriorsTeamPhoto.jpg";
import photo from "../Images/9.26.20-Sasquatch/WarriorsSasquatch100220_004.JPG";
import CircularProgress from "@material-ui/core/CircularProgress";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";

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
    fontSize: 40,
  },
  p2: {
    fontStyle: "italic",
  },
  title: {
    fontFamily: "'Nunito Sans', sans-serif",

    fontSize: 75,
    paddingTop: "20px",
    marginTop: 0,
    textAlign: "center",
    backgroundColor: "rgb(242, 242, 242)",
    marginBottom: 0,
  },

  footer: {
    padding: "3px",
    backgroundColor: "black",
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    color: "#1a90ff",
    animationDuration: "550ms",
  },
}));

function Home() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Container maxWidth="xl">
      <Typography className={classes.title} variant="h1">
        Welcome to the N.C. Warriors Hockey Program
      </Typography>

      <>
        <Grid
          container
          display="flex"
          direction="row"
          justify="space-around"
          alignItems="flex-start"
          style={{
            backgroundColor: "rgb(242, 242, 242)",
            height: "100%",
            paddingTop: "20px",
            paddingBottom: "100px",
          }}
        >
          <Grid item xs={5} style={{ width: "50%", marginTop: "50px" }}>
            <Typography className={classes.heading1} variant="h3">
              An All Disabled Veteran Hockey Team
            </Typography>

            <hr></hr>
            <p>
              <b>Established 2019 in Raleigh, N.C.</b>, The North Carolina
              Warriors Ice Hockey Program is a disabled veterans ice hockey team
              that exists to benefit disabled veterans from the United States
              Military Services. They are one of 21 USA Hockey Warriors teams in
              the nation.
            </p>
            <div></div>
            <Image aspectRatio="2" src={Team} />
            <p>
              Each and every one of these teams exist with the focus of
              providing an athletic outlet, with a sense of therapy and
              comradery for it’s members. The team consists of veterans that
              have service rated disabilities that can, and do, include physical
              disabilities that include surgically rebuilt limbs, non-fully
              functional appendages, and other physical challenges that have
              become the players new norm.
            </p>
            <p>
              This however, does not, and will not keep the Warriors from
              enjoying the game they love. These hockey players on the North
              Carolina Warriors Ice Hockey team roster ranges from having played
              for many years to veteran’s who are interested in trying hockey
              for the first time and this range evokes the training and teamwork
              that these Veterans value so much.
            </p>
            <Image aspectRatio="1.7" src={Schmidt} />
            <p className={classes.p2}>
              “We are excited to be on the Warriors because hockey is a
              fellowship game and in hockey, games are won and lost because of
              teamwork. There's no bigger fraternity in the world than the US
              Military and teamwork is also a key component of mission success.
              Stack the two together and you have something more intimate and
              fraternal.”
            </p>
            <p>#20 John Rodgers - Lower Team Captain</p>
          </Grid>

          <Grid
            item
            xs={4}
            style={{
              marginTop: 50,
              overflow: "hidden",
            }}
          >
            <Card style={{ marginBottom: "50px" }}>
              <CardHeader
                title="This Weeks Featured Player!"
                style={{ textAlign: "center" }}
              />
              <CardMedia component="img" image={Benner} />
              <CardContent>
                <Typography>
                  <p>
                    {" "}
                    <b>Coach Dustin Harris</b> has been an important piece in
                    our team since it’s inception. Being involved with hockey
                    from a very early age as he started playing at 5 years old,
                    he eats sleeps and breathes hockey.{" "}
                  </p>
                  <p>
                    He has been coaching since 2008, and moved to Raleigh in
                    July of 2019. Not only is he currently coaching the NC
                    Warriors, he also coaches the Carolina Stars 14U and Travel
                    A teams. His favorite teams are the Detroit Red Wings and
                    Vegas Golden Knights. Thanks for everything you do to help
                    the team, Coach!
                  </p>
                </Typography>
              </CardContent>
            </Card>

            <Grid item>
              <hr></hr>
              <br></br>
              <Typography align="center" variant="h5">
                Be sure to follow us on social media!
              </Typography>
              <br></br>
              <div style={{display: "flex", justifyContent: "space-around"}}>
              <FacebookIcon />
              <a href="https://www.facebook.com/NorthCarolinaWarriors">
                <Typography>Warriors Facebook</Typography>
              </a>
              <InstagramIcon />
              <a href="https://www.instagram.com/nc.warriors.hockey/">
                <Typography>Warriors Instagram</Typography>
              </a>
              <TwitterIcon />
              <a href="https://www.facebook.com/NorthCarolinaWarriors">
                <Typography>Warriors Twitter</Typography>
              </a>

              </div>
            </Grid>
          </Grid>
        </Grid>
      </>
    </Container>
  ); //EOR
}

export default Home;
