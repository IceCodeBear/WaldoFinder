import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/navbar";
import Home from "./components/homepage/home";
import { Route, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
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
