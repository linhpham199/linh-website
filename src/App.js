import React, { Component } from 'react';
import { Route, HashRouter, Link } from "react-router-dom";
import AboutMe from './views/AboutMe';
import MyProjects from './views/MyProjects';
import ContactMe from './views/ContactMe';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const myGithub = "https://github.com/linhpham199"
const myLinkedin = "https://www.linkedin.com/in/linhpham199/"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpened: false
    }
  }

  toggleMenu = () => {
    this.setState({
      isMenuOpened: !this.state.isMenuOpened
    })
  }

  render() {
    console.log(this.state.isMenuOpened)
    return (
      <div className="App">
        <HashRouter>  
          <div className="side-bar">
            <p className="my-name">Linh Pham</p>
            <input type="checkbox" checked={this.state.isMenuOpened} onChange={this.toggleMenu} className="navigation__checkbox" id="navi-toggle" />
            <label htmlFor="navi-toggle" className="navigation__button">
              <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav">
              <ul className="navigation__list">
                <li className="navigation__item" >
                  <Link className="navigation__list-item" to="/" onClick={this.toggleMenu}>About Me</Link>
                </li>
                <li className="navigation__item">
                  <Link className="navigation__list-item" to="/projects/" onClick={this.toggleMenu}>My Projects</Link>
                </li>
                <li className="navigation__item">
                  <Link className="navigation__list-item" to="/contact/" onClick={this.toggleMenu}>Contact Me</Link>
                </li>
              </ul>
            </nav>
            <div className="side-bar__icons">
              <a href={myGithub} target="_blank" rel="noopener noreferrer"> 
                <FaGithubSquare className="side-bar__icon-item"/>
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
        </HashRouter>

        
      </div>
    );
  }
}

export default App;
