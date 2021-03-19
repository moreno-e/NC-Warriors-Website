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
  title: {
    fontFamily: "'Oswald', sans-serif",
    color: "rgb(214,214,214)",
    fontSize: "5.5em",
    paddingTop: "4rem",
    paddingBottom: "2rem",
    textAlign: "center",
    backgroundColor: "rgb(27, 27, 27)",
  },
  topNote: {
    color: "rgb(214,214,214)",
    margin: "4rem 0",
    textAlign: "center",
    fontFamily: "'Open Sans', sans-serif",
  },
  titles: {
    textAlign: "left",
    paddingBottom: "2.5rem",
    fontFamily: "'Oswald', sans-serif",
    backgroundColor: "rgb(27, 27, 27)",
    color: "rgb(214,214,214)",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: "auto",
    marginBottom: "4rem",
    backgroundColor: "rgb(27, 27, 27)",
    minHeight: "700px",
    color: "rgb(214,214,214)",
    border: "1px solid",
  },
  overridePlayerHeading: {
    ...theme.typography.fontFamily,
    fontFamily: "'Oswald', sans-serif",
    fontWeight: "bold",
    paddingBottom: ".7rem",
  },
  overridePlayerBody: {
    ...theme.typography.fontFamily,
    fontFamily: "'Open Sans', sans-serif",
    textIndent: "3.125rem",
  },
}));

function PlayerProfiles() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography className={classes.title}>
        The North Carolina Warriors Hockey Team
      </Typography>
      <Typography variant="h5" className={classes.topNote}>
        <p>
          We currently have 74 members and growing! Our program is split into
          two teams, Lower and Upper. Comprised of various skill levels from
          newly skating to skating for decades. We compete nationally against
          other Warriors teams as well as others. In addition, we currently have two
          league teams comprised of members from the program at the Wake Competition  Center in Raleigh, North Carolina.
          The N.C. Warriors Intermediate C Team and the N.C. Warriors Lower C
          Team.
        </p>
        <p>
          We will continue adding members each week as we release our player
          spotlight feature on our social media pages. Be sure to follow!
        </p>
      </Typography>
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
          <Grid item sm={3}>
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
