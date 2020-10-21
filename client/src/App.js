import React, { Component } from 'react';
import "fdweb/normalize.css";
import "fdweb/fluent.css";
import "fdweb/fluent.js";
import "./App.css";

import Home from "./components/HomeComp";

class App extends Component{
  render(){
    return(
      <div className="page_container">
        <Home />
      </div>
    );
  }
}

export default App;
