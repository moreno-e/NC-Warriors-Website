import React, { useState, useEffect } from "react";
import PlayerDataService from "../api/PlayerDataService";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import SelectedTeam from "./SelectedTeam";
import { withRouter } from "react-router";
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
  cellButton: {
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(0.2),
    },
  },
  
  button: {
    margin: ".7em 0"
  },
}));

function DataFetching() {
  const [players, setPlayers] = useState([]);
  const history = useHistory();
  const classes = useStyles();
  const [isSet, setIsSet] = useState(false);

  useEffect(() => {
    PlayerDataService.retrieveAllPlayers()
      .then((response) => {
        console.log(response.data._embedded.players);
        setPlayers(response.data._embedded.players);
      })
      .catch((error) => {
        console.log(error + " bad");
      });
  }, []);

  const viewTeam = (team) => {
    if (team === "lower") {
      history.push(`/players/team/${team}`);
    }
  };

  const handleAddPlayer = () => {
    console.log("adding player");
    history.push();
  };

  return (
    <div>
      <Container maxWidth="xl">
      <Typography className={classes.heading} variant="h2">
          Welcome to the Player Information Center
        </Typography>
        <Typography className={classes.heading} variant="h4">
          Current memebers of the Warriors Program
        </Typography>

      <Button className={classes.button} variant="contained" color="primary" onClick={() => handleAddPlayer()}>
        Add Player
      </Button>      

      
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.tableHeader}>
              <TableCell className={classes.tableHeaderCell}>Player</TableCell>
              <TableCell className={classes.tableHeaderCell} align="right">Team</TableCell>
              <TableCell className={classes.tableHeaderCell} align="right">Email</TableCell>
              <TableCell className={classes.tableHeaderCell} align="right">Phone</TableCell>
              <TableCell className={classes.tableHeaderCell} align="center">
                  Update or Delete
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player) => (
              <TableRow key={player.id} className={classes.tableRow}>
                <TableCell className={classes.tableBodyCell} component="th" scope="row">
                  {player.firstName}
                </TableCell>
                <TableCell className={classes.tableBodyCell} align="right">{player.team}</TableCell>
                <TableCell className={classes.tableBodyCell} align="right">{player.email}</TableCell>
                <TableCell className={classes.tableBodyCell} align="right">{player.phoneNumber}</TableCell>
                <TableCell
                    className={classes.tableBodyCell}
                    className={classes.cellButton}
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

      <Button className={classes.button} variant="contained" color="primary" onClick={() => viewTeam("lower")}>
        To view lower team
      </Button>
      </Container>
    </div>
  );
}

export default withRouter(DataFetching);
