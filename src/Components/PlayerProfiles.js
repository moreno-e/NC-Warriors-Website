import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import UpperPlayerInfo from "../DataFiles/UpperPlayerInfo.js";
import LowerPlayerInfo from "../DataFiles/LowerPlayerInfo.js";
import CoachesInfo from "../DataFiles/CoachesInfo.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  titles: {
    backgroundColor: "white",
    textAlign: "left",
    paddingLeft: "20px",
    paddingTop: "20px",
    paddingBottom: "40px",
    fontFamily: "'Oswald', sans-serif",
    backgroundColor: "rgb(27, 27, 27)",
    color: "rgb(214,214,214)",
  },
  card: {
    maxWidth: "auto",
    marginBottom: "50px",
    backgroundColor: "rgb(27, 27, 27)",
    height: "43em",
    color: "rgb(214,214,214)",
    border: "1px solid",
    paddingBottom: "10px",
  },
  overridePlayerHeading: {
    ...theme.typography.fontFamily,
    fontFamily: "'Oswald', sans-serif",
    fontWeight: "bold",
    paddingBottom: "10px",
  },
  overridePlayerBody: {
    ...theme.typography.fontFamily,
    fontFamily: "'Open Sans', sans-serif",
    textIndent: "50px",
  },
  grid: {
    backgroundColor: "rgb(27, 27, 27)",
  },
  h2: {
    color: "rgb(214,214,214)",
    paddingLeft: "20px",
    marginTop: "50px",
    textAlign: "center",
    fontFamily: "'Open Sans', sans-serif",
  },
}));

function PlayerProfiles() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <h2 className={classes.h2}>
        We currently have 74 members! We will continue adding members each week
        as we release our player spotlight feature on our social media pages!
      </h2>
      <Typography className={classes.titles} variant="h3">
        The Warriors Upper Team
      </Typography>

      <Grid
        className={classes.grid}
        container
        display="flex"
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        spacing={6}
      >
        {UpperPlayerInfo.map((data) => (
          <Grid item sm={3} >
            <Card className={classes.card}>
              <CardMedia component="img" image={data.image} />
              <CardContent>
                <Typography
                  className={classes.overridePlayerHeading}
                  align="center"
                  variant="h5"
                >
                  {data.name}
                </Typography>
                <Typography
                  className={classes.overridePlayerBody}
                  variant="body1"
                >
                  {data.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography className={classes.titles} variant="h3">
        The Warriors Lower Team
      </Typography>

      <Grid
        className={classes.grid}
        container
        display="flex"
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        spacing={7}
      >
        {LowerPlayerInfo.map((data) => (
          <Grid item sm={3} style={{ justify: "center" }}>
            <Card className={classes.card}>
              <CardMedia component="img" image={data.image} />
              <CardContent>
                <Typography
                  className={classes.overridePlayerHeading}
                  align="center"
                  variant="h5"
                >
                  {data.name}
                </Typography>

                <Typography
                  className={classes.overridePlayerBody}
                  variant="body1"
                >
                  {data.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography className={classes.titles} variant="h3">
        The Warriors Coaching Staff
      </Typography>

      <Grid
        className={classes.grid}
        container
        display="flex"
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        spacing={7}
      >
        {CoachesInfo.map((data) => (
          <Grid item sm={3} style={{ justify: "center" }}>
            <Card className={classes.card}>
              <CardMedia component="img" image={data.image} />
              <CardContent>
                <Typography
                  className={classes.overridePlayerHeading}
                  align="center"
                  variant="h5"
                >
                  {data.name}
                </Typography>

                <Typography
                  className={classes.overridePlayerBody}
                  variant="body1"
                >
                  {data.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PlayerProfiles;
