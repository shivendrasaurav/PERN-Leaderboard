import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import "fdweb/fluent.css";
import "fdweb/fluent-icons.css";
import "./App.css";

import Home from "./components/HomeComp";
import Schedule from "./components/ScheduleComp";
import Navbar from "./components/NavbarComp";
import Leaderboard from "./components/LeaderboardComp";
import FourZeroFour from "./components/FourZeroFourComp";


const App = () => {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route component={FourZeroFour} />
        </Switch>
    </Router>
  );
}

export default App;

//        <Navbar />
