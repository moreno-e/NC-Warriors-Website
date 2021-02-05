import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import PrivateRoute from "./Components/PrivateRoute";
import { AuthProvider } from "./Components/Auth";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Banner from "./Images/Banner.jpg";
import NavBar from "./Components/NavBar";
import PlayerProfiles from "./Components/PlayerProfiles";
import { sizing } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import Footer from "./Footer";

function App() {
  return (
    <>
      <img src={Banner}  style={{marginBottom: "5px"}}/>
      <div className="App-Content">
        <Router>
          <NavBar />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Login" exact component={Login} />
            <Route path="/PlayerProfiles" exact component={PlayerProfiles} />
          </Switch>
        </Router>
      </div>
      <Footer className="Footer"></Footer>
    </>
  );
}

export default App;
