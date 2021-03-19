import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: "'Oswald', sans-serif",
    color: "rgb(214,214,214)",
    textAlign: "center",
  },
  paragraph: {
    color: "rgb(214,214,214)",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "1.25em",
    justifyContent: "center",
  },
}));

function InterestPage() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={6}>
          <Typography className={classes.heading} variant="h2">
            Interested in becoming a Warrior?
          </Typography>
          <Typography
            className={classes.paragraph}
            style={{ textIndent: "1.25rem" }}
          >
            <p>
              First, thank you for your interest and your support. Our program
              started with roughly a dozen members a little over two years ago.
              Now we are currently at 74 players and growing.
            </p>
            <p>
              You will be on a team comprised of veterans, male and female, with
              a wide age range, from all branches (still waiting for Space
              Force). We are excited to have our first female Warriors join our
              program recently and are hoping for an all female Warriors team!
            </p>
            <p>
              <b>
                Please check below to see if you are eligible and selected the
                button below to join the North Carolina Warriors Hockey Team.
              </b>
            </p>
          </Typography>
          <div style={{ textAlign: "center", margin: "1em" }}>
            <Button variant="outlined" color="secondary">
              New Player Form
            </Button>
          </div>

          <Typography className={classes.heading} variant="h4">
            Warriors Hockey Eligibility
          </Typography>

          <Typography
            className={classes.paragraph}
            style={{ textIndent: "1.25rem" }}
          >
            <p>
              USA Hockey's Warriors Hockey Discipline is dedicated to injured
              and disabled US Military Veterans who have served our country and
              play the sport of ice hockey
            </p>
            <p>
              To be eligible you must be or have been Veterans and Members of
              the Armed Forces (Army, Navy, Air Force, Marine Corps, Coast
              Guard, Space Force), with former Members required to have been
              discharged under honorable or general conditions. Any exceptions
              must be approved by the USA Hockey Disabled Hockey Section.
            </p>
            <p>
              Cases presenting multiple discharges of varying character will
              also be referred for adjudication to the USA Hockey Disabled
              Hockey Section.
            </p>
          </Typography>
          <Typography className={classes.paragraph}>
            <p>
              You must also meet one of the following criterions for
              eligibility:
            </p>
            <ol>
              <li>Purple Heart.</li>
              <li>VA rating of 10% or greater.</li>
              <li>
                Medically discharged from active, reserves or National Guard.
              </li>
              <li>
                Veterans with disabilities that are the result of a disease or
                injury incurred or aggravated during active military service.
              </li>
              <li>
                Post-service disabilities  that are considered related or
                secondary to disabilities occurring in service and for
                disabilities presumed  to be related to circumstances of military
                service, even though they may arise after service.
              </li>
              <li>
                Any Veteran with a disability that did not occur during Military
                Service and meets discharge eligibility.
              </li>
            </ol>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default InterestPage;
