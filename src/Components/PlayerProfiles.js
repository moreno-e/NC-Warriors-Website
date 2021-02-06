import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Benner from "../Images/Benner.jpg";
import Reynolds from "../Images/Reynolds.jpg";
import Bartley from "../Images/Bartley.jpg";

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
    paddingTop: "10px",
    paddingBottom: "10px"
  },
  card: {
    marginLeft: "30px",
    maxWidth: 400,
    justify: "center",
    marginBottom: "50px"
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
          <Grid item sm={3} style={{ justify: "center" }}>
            <Card className={classes.card}>
              <CardMedia component="img" image={Benner} />
              <CardContent>
                Player Name
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
                  in massa egestas mollis varius; dignissim elementum. Mollis
                  tincidunt mattis hendrerit dolor eros enim, nisi ligula
                  ornare. Hendrerit parturient habitant pharetra rutrum gravida
                  porttitor eros feugiat. Mollis elit sodales taciti duis
                  praesent id. Consequat urna vitae morbi nunc congue.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card className={classes.card}>
              <CardMedia component="img" image={Reynolds} />
              <CardContent>
                Player Name
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
                  in massa egestas mollis varius; dignissim elementum. Mollis
                  tincidunt mattis hendrerit dolor eros enim, nisi ligula
                  ornare. Hendrerit parturient habitant pharetra rutrum gravida
                  porttitor eros feugiat. Mollis elit sodales taciti duis
                  praesent id. Consequat urna vitae morbi nunc congue.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card className={classes.card}>
              <CardMedia component="img" image={Bartley} />
              <CardContent>
                Player Name
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
                  in massa egestas mollis varius; dignissim elementum. Mollis
                  tincidunt mattis hendrerit dolor eros enim, nisi ligula
                  ornare. Hendrerit parturient habitant pharetra rutrum gravida
                  porttitor eros feugiat. Mollis elit sodales taciti duis
                  praesent id. Consequat urna vitae morbi nunc congue.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card className={classes.card}>
              <CardMedia component="img" image={Benner} />
              <CardContent>
                Player Name
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
                  in massa egestas mollis varius; dignissim elementum. Mollis
                  tincidunt mattis hendrerit dolor eros enim, nisi ligula
                  ornare. Hendrerit parturient habitant pharetra rutrum gravida
                  porttitor eros feugiat. Mollis elit sodales taciti duis
                  praesent id. Consequat urna vitae morbi nunc congue.
                </p>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item sm={3} style={{ justify: "center" }}>
            <Card className={classes.card}>
              <CardMedia component="img" image={Benner} />
              <CardContent>
                This is wayne!{" "}
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
                  in massa egestas mollis varius; dignissim elementum. Mollis
                  tincidunt mattis hendrerit dolor eros enim, nisi ligula
                  ornare. Hendrerit parturient habitant pharetra rutrum gravida
                  porttitor eros feugiat. Mollis elit sodales taciti duis
                  praesent id. Consequat urna vitae morbi nunc congue.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card className={classes.card}>
              <CardMedia component="img" image={Reynolds} />
              <CardContent>
                This is wayne!{" "}
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
                  in massa egestas mollis varius; dignissim elementum. Mollis
                  tincidunt mattis hendrerit dolor eros enim, nisi ligula
                  ornare. Hendrerit parturient habitant pharetra rutrum gravida
                  porttitor eros feugiat. Mollis elit sodales taciti duis
                  praesent id. Consequat urna vitae morbi nunc congue.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card className={classes.card}>
              <CardMedia component="img" image={Bartley} />
              <CardContent>
                This is wayne!{" "}
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
                  in massa egestas mollis varius; dignissim elementum. Mollis
                  tincidunt mattis hendrerit dolor eros enim, nisi ligula
                  ornare. Hendrerit parturient habitant pharetra rutrum gravida
                  porttitor eros feugiat. Mollis elit sodales taciti duis
                  praesent id. Consequat urna vitae morbi nunc congue.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card className={classes.card}>
              <CardMedia component="img" image={Benner} />
              <CardContent>
                This is wayne!{" "}
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
                  in massa egestas mollis varius; dignissim elementum. Mollis
                  tincidunt mattis hendrerit dolor eros enim, nisi ligula
                  ornare. Hendrerit parturient habitant pharetra rutrum gravida
                  porttitor eros feugiat. Mollis elit sodales taciti duis
                  praesent id. Consequat urna vitae morbi nunc congue.
                </p>
              </CardContent>
            </Card>
          </Grid>
          
          {/* *
        <Grid item xs={6} sm={3}>
        <Card style={{}}>
            <CardMedia component="img" image={Reynolds} />
            <CardContent>
              This is wayne!{" "}
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
                massa egestas mollis varius; dignissim elementum. Mollis
                tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                Hendrerit parturient habitant pharetra rutrum gravida porttitor
                eros feugiat. Mollis elit sodales taciti duis praesent id.
                Consequat urna vitae morbi nunc congue.
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Card style={{}}>
            <CardMedia component="img" image={Bartley} />
            <CardContent>
              This is wayne!{" "}
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
                massa egestas mollis varius; dignissim elementum. Mollis
                tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                Hendrerit parturient habitant pharetra rutrum gravida porttitor
                eros feugiat. Mollis elit sodales taciti duis praesent id.
                Consequat urna vitae morbi nunc congue.
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Card style={{}}>
            <CardMedia component="img" image={Reynolds} />
            <CardContent>
              This is wayne!{" "}
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
                massa egestas mollis varius; dignissim elementum. Mollis
                tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                Hendrerit parturient habitant pharetra rutrum gravida porttitor
                eros feugiat. Mollis elit sodales taciti duis praesent id.
                Consequat urna vitae morbi nunc congue.
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Card style={{}}>
            <CardMedia component="img" image={Bartley} />
            <CardContent>
              This is wayne!{" "}
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
                massa egestas mollis varius; dignissim elementum. Mollis
                tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                Hendrerit parturient habitant pharetra rutrum gravida porttitor
                eros feugiat. Mollis elit sodales taciti duis praesent id.
                Consequat urna vitae morbi nunc congue.
              </p>
            </CardContent>
          </Card>
        
        </Grid>
        */}
        </Grid>
      </Container>
    
  );
}

export default PlayerProfiles;
