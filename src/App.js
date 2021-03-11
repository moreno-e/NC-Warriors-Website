import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Banner from "./Images/Banner.jpg";
import NavBar from "./Components/NavBar";
import PlayerProfiles from "./Components/PlayerProfiles";
import Events from "./Components/Events";
import FundraisingSponsors from "./Components/FundraisingSponsors";
import Footer from "./Footer";

import DataFetching from "./Components/DataFetching";
import AuthenticatedRoute from "./Components/AuthenticatedRoute.jsx";
import AuthenticationService from "./Components/AuthenticationService.js";
import SelectedTeam from "./Components/SelectedTeam";

export const LoggedInContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    AuthenticationService.isUserLoggedIn()
  );

  return (
    <>
      <img src={Banner} />

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
            exact
            component={FundraisingSponsors}
          />
          <AuthenticatedRoute
            path="/DataFetching"
            exact
            component={DataFetching}
          />
          <Route path="/players/team/:team">
            <SelectedTeam />
          </Route>

          <LoggedInContext.Provider value={setIsLoggedIn}>
            <Route path="/login" exact component={Login} />
          </LoggedInContext.Provider>
        </Switch>
      </Router>

      <Footer></Footer>
    </>
  );
}

export default App;
