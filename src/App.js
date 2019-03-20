import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutMe from './views/AboutMe';
import MyProjects from './views/MyProjects';
import ContactMe from './views/ContactMe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>  
          <nav className="side-bar">
            <ul className="side-bar__list">
              <li className="side-bar__list-item">
                <Link to="/about/">About Me</Link>
              </li>
              <li className="side-bar__list-item">
                <Link to="/projects/">My Projects</Link>
              </li>
              <li className="side-bar__list-item">
                <Link to="/contact/">Contact Me</Link>
              </li>
            </ul>
          </nav>
          
          <div className="main-menu">
            <Route path="/about/" component={AboutMe} />
            <Route path="/projects/" component={MyProjects} />
            <Route path="/contact/" component={ContactMe} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
