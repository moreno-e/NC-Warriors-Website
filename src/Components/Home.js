import 'fontsource-roboto';
import { Typography, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Image from 'material-ui-image';
import Schmidt from '../Images/Schmidt.jpg';
import Benner from '../Images/Gioles.jpg';
import 'fontsource-roboto';
import Team from '../Images/WarriorsTeamPhoto.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'rgb(27, 27, 27)',
  },

  heading1: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '2.7em', //
    textAlign: 'center',
  },
  p2: {
    fontStyle: 'italic',
  },
  title: {
    fontFamily: "'Oswald', sans-serif",
    color: 'rgb(214,214,214)',
    fontSize: '5.5em',
    paddingTop: '4rem',
    paddingBottom: '2rem',
    textAlign: 'center',
    backgroundColor: 'rgb(27, 27, 27)',
  },
  grid: {
    backgroundColor: 'rgb(27, 27, 27)',
    paddingBottom: '4.5rem',
    color: 'rgb(214,214,214)',
  },
  card: {
    marginBottom: '3rem',
    backgroundColor: 'rgb(27, 27, 27)',
    color: 'rgb(214,214,214)',
    border: '1px solid',
  },
  paragraph: {
    ...theme.typography.fontFamily,
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '1.25em',
    textIndent: '3.125rem',
  },
  test: {
    ...theme.typography.fontFamily,
    fontStyle: "'Open Sans', sans-serif",
  },
  overrideCardHeading: {
    ...theme.typography.fontFamily,
    fontFamily: "'Oswald', sans-serif",
    textAlign: 'center',
    fontSize: '1.875rem',
  },
  overrideSponsorBody: {
    ...theme.typography.fontFamily,
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '1.25',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Typography className={classes.title} variant="h1">
        WELCOME TO THE N.C. WARRIORS HOCKEY PROGRAM
      </Typography>

      <>
        <Grid
          className={classes.grid}
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
        >
          <Grid item sm={5} style={{ marginTop: '50px' }}>
            <Typography className={classes.heading1} variant="h3">
              AN ALL DISABLED VETERAN HOCKEY TEAM
            </Typography>

            <hr></hr>
            <br></br>
            <Typography className={classes.paragraph} variant="body1">
              <b>Established 2019 in Raleigh, N.C.</b>, The North Carolina
              Warriors Ice Hockey Program is a disabled veteran's ice hockey
              team that exists to benefit disabled veterans from the United
              States Military Services. They are one of 21 USA Hockey Warriors
              teams in the nation.
            </Typography>

            <br></br>

            <Image aspectRatio="2" src={Team} />

            <br></br>

            <Typography className={classes.paragraph}>
              Each and every one of these teams exist with the focus of
              providing an athletic outlet, with a sense of therapy and
              comradery for its members. The team consists of veterans that have
              service rated disabilities that can, and do, include physical
              disabilities that include surgically rebuilt limbs, non-fully
              functional appendages, and other physical challenges that have
              become the players new norm.
            </Typography>

            <br></br>

            <Typography className={classes.paragraph}>
              This however, does not, and will not keep the Warriors from
              enjoying the game they love. These hockey players on the North
              Carolina Warriors Ice Hockey team roster ranges from having played
              for many years to veteran’s who are interested in trying hockey
              for the first time and this range evokes the training and teamwork
              that these Veterans value so much.
            </Typography>

            <br></br>

            <Image aspectRatio="1.7" src={Schmidt} />

            <br></br>

            <Typography className={classes.paragraph}>
              <i>
                “We are excited to be on the Warriors because hockey is a
                fellowship game and in hockey, games are won and lost because of
                teamwork. There's no bigger fraternity in the world than the US
                Military and teamwork is also a key component of mission
                success. Stack the two together and you have something more
                intimate and fraternal.”
              </i>{' '}
              <div style={{ textAlign: 'center' }}>
                - #20 John Rodgers, Lower Team Captain
              </div>
            </Typography>
          </Grid>

          <Grid
            item
            sm={4}
            style={{
              marginTop: 50,
              overflow: 'hidden',
            }}
          >
            <Card className={classes.card}>
              <CardHeader
                title="This Weeks Featured Player!"
                className={classes.overrideCardHeading}
                disableTypography="true"
                titleTypographyProps
              />
              <CardMedia component="img" image={Benner} />
              <CardContent>
                <Typography className={classes.paragraph}>
                  <b>Coach Theo Gioles!</b> Theo is from Wantagh, NY and has
                  been playing ice hockey since he was 10 years old. Although
                  being fairly new to coaching he’s coached hockey in the past
                  with the Ferraro Brothers in NY and specializes in Sports
                  Performance Coaching and applies that knowledge to his hockey
                  coaching as he is a big believer in skill development,
                  especially when it comes to skating. Coach Gioles amount of
                  respect for all of our service members is unwavering and we
                  couldn’t appreciate all the time, effort and hard work he puts
                  into helping our program grow and the development of our
                  players. Thanks, Coach
                </Typography>
              </CardContent>
            </Card>

            <Grid item style={{ marginBottom: '0px', marginTop: '20px' }}>
              <hr></hr>
              <br></br>
              <Typography
                className={classes.paragraph}
                align="center"
                variant="h5"
                style={{ marginTop: '40px' }}
              >
                Be sure to follow us on social media!
              </Typography>

              <br></br>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginTop: '30px',
                }}
              >
                <FacebookIcon />
                <a
                  href="https://www.facebook.com/NorthCarolinaWarriors"
                  style={{ color: 'white' }}
                >
                  <Typography>Warriors Facebook</Typography>
                </a>
                <InstagramIcon />
                <a
                  href="https://www.instagram.com/nc.warriors.hockey/"
                  style={{ color: 'white' }}
                >
                  <Typography>Warriors Instagram</Typography>
                </a>
                <TwitterIcon />
                <a
                  href="https://www.facebook.com/NorthCarolinaWarriors"
                  style={{ color: 'white' }}
                >
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
