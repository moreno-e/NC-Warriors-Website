import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Banner from './Images/Banner.jpg';
import NavBar from './Components/NavBar';
import PlayerProfiles from './Components/PlayerProfiles';
import Events from './Components/Events';
import FundraisingSponsors from './Components/FundraisingSponsors';
import Footer from './Footer';
import AddPlayer from './Components/AddPlayer';
import DataFetching from './Components/DataFetching';
import AuthenticatedRoute from './Components/AuthenticatedRoute.jsx';
import AuthenticationService from './Components/AuthenticationService.js';
import SelectedTeam from './Components/SelectedTeam';
import InterestPage from './Components/InterestPage';
import { makeStyles } from '@material-ui/core/styles';
import Errorss from './Components/Error'

export const LoggedInContext = createContext();

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      display: "none"
    },
  },
}));

function App() {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(
    AuthenticationService.isUserLoggedIn()
  );

  return (
    <>
      <div className={classes.root}>
        <img src={Banner} width="100%" height="100%" />
      </div>

      <Router>
        <LoggedInContext.Provider value={setIsLoggedIn}>
          <NavBar isLoggedIn={isLoggedIn} />
        </LoggedInContext.Provider>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/PlayerProfiles" component={PlayerProfiles} />
          <Route path="/Events" component={Events} />
          <Route
            path="/FundraisingSponsors"
            
            component={FundraisingSponsors}
          />
          <Route path="/Interest" exact component={InterestPage} />
          {/* <AuthenticatedRoute
            path="/DataFetching"
            exact
            component={DataFetching}
          /> */}
          {/* <Route path="/players/team/:team">
            <SelectedTeam />
          </Route>
          <Route path="/players/player/:id">
            <AddPlayer />
          </Route>
          <LoggedInContext.Provider value={setIsLoggedIn}>
            <Route path="/login" exact component={Login} />
          </LoggedInContext.Provider> */}
          <Route path="*" component={Home}/>
        </Switch>
      </Router>

      <Footer></Footer>
    </>
  );
}

export default App;
