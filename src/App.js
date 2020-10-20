import React from 'react';
import Navbar from "./components/Navbar/navbar";
import Home from "./components/homepage/home";
import { Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
          <header>
            <Navbar />
            <Router>
              <div>
                <Route exact path='/' component={Home} />
              </div>
            </Router>
          </header>
      </div>
    );
  }
}

export default App;
