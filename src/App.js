import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Banner from "./Images/Banner.jpg";
import NavBar from "./Components/NavBar";
import PlayerProfiles from "./Components/PlayerProfiles";
import Events from "./Components/Events";
import FundraisingSponsors from "./Components/FundraisingSponsors";
import NewPlayerForm from "./Components/NewPlayerForm";
import Store from "./Components/Store";
import Footer from "./Footer";


function App() {
  return (
    <>
      <img src={Banner} />
      <div className="App-Content">
        <Router>
          <NavBar />
          <div style={{backgroundColor: "black", height: "100%"}}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Login" exact component={Login} />
              <Route path="/PlayerProfiles" exact component={PlayerProfiles} />
              <Route path="/Events" exact component={Events} />
              <Route path="/FundraisingSponsors" exact component={FundraisingSponsors} />
              <Route path="/NewPlayerForm" exact component={NewPlayerForm} />
              <Route path="/Store" exact component={Store} />
            </Switch>
          </div>
        </Router>
      </div>
      <Footer className="Footer"></Footer>
    </>
  );
}

export default App;
