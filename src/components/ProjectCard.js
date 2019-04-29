import React, { Component } from 'react';
import Tag from './Tag';


class ProjectCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flipped: false
    }
  }

  toggleCard = () => {
    this.setState({
      flipped: !this.state.flipped
    })
  }

  render() {
    const { flipped } = this.state

    return (
      <div className="card" onClick={this.toggleCard}>
        <a href={this.props.link} className="card__link--web" target="_blank" rel="noopener noreferrer">
          <div className={`card__side card__side--front ${flipped ? "card__side--front-flipped" : ""} card__side--front-${this.props.code}`}>
            <p className="card__title">
              {this.props.name}
              <object className="card__link"><a href={this.props.link} className="card__link--mobile" target="_blank" rel="noopener noreferrer">More info &raquo;</a></object>              
            </p>
          </div>

          <div className={`card__side card__side--back ${flipped ? "card__side--back-flipped" : ""} card__side--back-${this.props.code}`}>
            <div className="card__intro">
              {this.props.description}
            </div>
            <div className="">
            </div>
            <div className="card__tag">
              {this.props.languages.map((language, i) => {
                return <Tag key={i} name={language}/>
              })}
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default ProjectCard;