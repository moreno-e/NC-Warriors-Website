import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import UpperPlayerInfo from "../UpperPlayerInfo.js";
import LowerPlayerInfo from "../LowerPlayerInfo.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  upper: {
    color: "Black",
    backgroundColor: "white",
    textAlign: "left",
    paddingLeft: "20px",
    paddingTop: "40px",
    paddingBottom: "30px",
    fontFamily: "'Nunito Sans', sans-serif",
  },
  card: {
    marginLeft: "30px",
    maxWidth: 400,
    justify: "center",
    marginBottom: "50px",
  },
}));
//xs ={6} sm={3}
function PlayerProfiles() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>

      <Typography className={classes.upper} variant="h3">
        The Warriors Upper Team
      </Typography>

      <Grid
        container
        display="flex"
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
        spacing={0}
        style={{ backgroundColor: "white" }}
      >
        {UpperPlayerInfo.map((data) => (
          <Grid item sm={3} style={{ justify: "center" }}>
            <Card className={classes.card}>
              <CardMedia component="img" image={data.image} />
              <CardContent>
                <Typography variant="h5" align="center">
                  {data.name}
                </Typography>

                <p>{data.bio}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography className={classes.upper} variant="h3">
          The Warriors Lower Team
      </Typography>

        <Grid
        container
        display="flex"
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
        spacing={0}
        style={{ backgroundColor: "white" }}
      >
        {LowerPlayerInfo.map((data) => (
          <Grid item sm={3} style={{ justify: "center" }}>
            <Card className={classes.card}>
              <CardMedia component="img" image={data.image} />
              <CardContent>
                <Typography variant="h5" align="center">
                  {data.name}
                </Typography>

                <p>{data.bio}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography className={classes.upper} variant="h3">
          The Warriors Coaching Staff
      </Typography>

    </Container>
  );
}

export default PlayerProfiles;
