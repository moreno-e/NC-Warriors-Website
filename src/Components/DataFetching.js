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
    margin: ".7em .7em .7em 0 ",
  },
  button1: {
    marginLeft: "auto",
    marginRight: ".7em",
  },
}));

function DataFetching() {
  const [players, setPlayers] = useState([]);
  const history = useHistory();
  const classes = useStyles();
  const [isSet, setIsSet] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    PlayerDataService.retrieveAllPlayers()
      .then((response) => {
        console.log(response.data._embedded.players.id);
        setPlayers(response.data._embedded.players);
      })
      .catch((error) => {
        console.log(error + " bad");
      });
  }, [refreshKey]);

  const viewTeam = (team) => {
    history.push(`/players/team/${team}`);
  };

  const handleAddPlayer = () => {
    console.log("Adding new player");
    const id = -1;
    history.push(`/players/player/${id}`);
  };

  const deletePlayer = (playerId) => {
    console.log("Player id " + playerId);
    PlayerDataService.deletePlayer(playerId)
      .then((response) => {
        console.log("player deleted!");
        setRefreshKey((oldKey) => oldKey + 1);
      })
      .catch((error) => {
        console.log("error! could not delete player with id " + playerId);
        console.log(error);
      });
  };

  const updatePlayer = (playerId) => {
    const id = playerId.slice(30);
    console.log("Updating Player with id " + id);
    history.push(`/players/player/${id}`);
  };

  const sortBy = (value) => {
    switch (value) {
      case "team":
        PlayerDataService.sortByTeam().then((response) => {
          console.log("sort by team success!");
          setPlayers(response.data._embedded.players);
        });
        break;

      case "number":
        PlayerDataService.sortByJerseyNumber().then((response) => {
          console.log("sort by jersey number success!");
          setPlayers(response.data._embedded.players);
        });
        break;
    }
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

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => handleAddPlayer()}
        >
          Add Player
        </Button>        
          <Button
            className={classes.button}
            variant="contained"
            color="default"
            onClick={() => sortBy("team")}
          >
            Sort By Team
          </Button>

          <Button
            className={classes.button}
            variant="contained"
            color="default"
            onClick={() => sortBy("number")}
          >
            Sort By Jersey Number
          </Button>
      

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.tableHeader}>
                <TableCell className={classes.tableHeaderCell} align="center">
                  Player
                </TableCell>
                <TableCell className={classes.tableHeaderCell} align="center">
                  Jersey Number
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
                  Update or Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player) => (
                <TableRow
                  key={player._links.player.href}
                  className={classes.tableRow}
                >
                  {/* {console.log(player._links.player.href)} */}
                  <TableCell
                    className={classes.tableBodyCell}
                    component="th"
                    scope="row"
                    align="center"
                  >
                    {player.firstName} {player.lastName}
                  </TableCell>
                  <TableCell className={classes.tableBodyCell} align="center">
                    {player.jerseyNumber}
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
                  <TableCell
                    className={classes.tableBodyCell}
                    className={classes.cellButton}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => updatePlayer(player._links.player.href)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => deletePlayer(player._links.player.href)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => viewTeam("lower")}
        >
          To view lower team
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => viewTeam("upper")}
        >
          To view upper team
        </Button>
      </Container>
    </div>
  );
}

export default withRouter(DataFetching);
