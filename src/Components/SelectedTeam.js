import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import PlayerDataService from "../api/PlayerDataService";
import { useParams } from "react-router";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableHeader: {
    backgroundColor: "rgb(90, 90, 90)",
  },
  tableRow: {
    "&:hover": {
      backgroundColor: "rgb(242, 242, 242)",
    },
  },
  tableHeaderCell: {
    color: "rgb(214,214,214)",
    fontFamily: "'Oswald', sans-serif",
    fontSize: "1.7em",
  },
  tableBodyCell: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "1em",
  },
  heading: {
    color: "rgb(214,214,214)",
    fontFamily: "'Oswald', sans-serif",
    padding: ".5em 0",
  },
  button: {
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(0.2),
    },
  },
}));

function SelectedTeam() {
  const classes = useStyles();
  const [players, setPlayers] = useState([]);
  //must have same name for destructoring
  const { team } = useParams();

  useEffect(() => {
    PlayerDataService.retrieveLowerPlayers(team)
      .then((response) => {
        console.log(response);
        setPlayers(response.data);
      })
      .catch((error) => {
        console.log(error + " bad");
      });
  }, []);

  return (
    <div>
      <div style={{ alignContent: "center" }}></div>

      <Container maxWidth="xl">
        <Typography className={classes.heading} variant="h2">
          The Warriors Lower Team
        </Typography>
        <Typography className={classes.heading} variant="h4">
          Current Warriors Lower Team
        </Typography>
        
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.tableHeader}>
                <TableCell className={classes.tableHeaderCell}>
                  Player
                </TableCell>
                <TableCell className={classes.tableHeaderCell} align="center">
                  Team
                </TableCell>
                <TableCell className={classes.tableHeaderCell} align="center">
                  Email
                </TableCell>
                <TableCell className={classes.tableHeaderCell} align="center">
                  Phone
                </TableCell>
                <TableCell className={classes.tableHeaderCell} align="center">
                  Position
                </TableCell>
                <TableCell className={classes.tableHeaderCell} align="center">
                  Update or Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.id} className={classes.tableRow}>
                  <TableCell
                    className={classes.tableBodyCell}
                    component="th"
                    scope="row"
                  >
                    {player.firstName} {player.lastName}
                  </TableCell>
                  <TableCell className={classes.tableBodyCell} align="center">
                    {player.team}
                  </TableCell>
                  <TableCell className={classes.tableBodyCell} align="center">
                    {player.email}
                  </TableCell>
                  <TableCell className={classes.tableBodyCell} align="center">
                    {player.phoneNumber}
                  </TableCell>
                  <TableCell className={classes.tableBodyCell} align="center">
                    {player.position}
                  </TableCell>
                  <TableCell
                    className={classes.tableBodyCell}
                    className={classes.button}
                  >
                    <Button variant="contained" color="primary">
                      Update
                    </Button>
                    <Button variant="contained" color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default withRouter(SelectedTeam);
