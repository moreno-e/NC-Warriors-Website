import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import PrivateRoute from "./Components/PrivateRoute";
import { AuthProvider } from "./Components/Auth";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      
        <Router>
          <div className="App">         
            <Switch>
              <Route path="/" exact component={Home} />       
            </Switch>
          </div>
        </Router>
    
    </div>
  );
}

export default App;
