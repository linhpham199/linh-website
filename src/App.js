import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutMe from './views/AboutMe';
import MyProjects from './views/MyProjects';
import ContactMe from './views/ContactMe';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const myGithub = "https://github.com/linhpham199"
const myLinkedin = "https://www.linkedin.com/in/linhpham199/"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>  
          <div className="side-bar">
            <p className="my-name">Linh Pham</p>
            <nav>
              <ul className="side-bar__list">
                <li className="side-bar__item">
                  <Link className="side-bar__list-item" to="/">About Me</Link>
                </li>
                <li className="side-bar__item">
                  <Link className="side-bar__list-item" to="/projects/">My Projects</Link>
                </li>
                <li className="side-bar__item">
                  <Link className="side-bar__list-item" to="/contact/">Contact Me</Link>
                </li>
              </ul>
            </nav>
            <div className="side-bar__icons">
              <a href={myGithub} target="_blank" rel="noopener noreferrer"> 
                <FaGithub className="side-bar__icon-item"/>
              </a>
              <a href={myLinkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="side-bar__icon-item"/>
              </a>
            </div>
          </div>
          
          <div className="main-menu">
            <Route exact path="/" component={AboutMe} />
            <Route path="/projects/" component={MyProjects} />
            <Route path="/contact/" component={ContactMe} />
          </div>
        </Router>

        
      </div>
    );
  }
}

export default App;
