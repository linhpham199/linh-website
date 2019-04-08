import React, { Component } from 'react';
import Tag from './Tag';


class ProjectCard extends Component {
  render() {
    return (
      <div className="card">
        <a href={this.props.link} className="card__link--web" target="_blank" rel="noopener noreferrer">
        <div className={`card__side card__side--front card__side--front-${this.props.order%3}`}>
          {this.props.name}
        </div>

        <div className={`card__side card__side--back card__side--back-${this.props.order%3}`}>
          <div className="card__intro">
            {this.props.description}
          </div>
          <div className="card__link">
            <object><a href={this.props.link} className="card__link--mobile" target="_blank" rel="noopener noreferrer">More info &raquo;</a></object>
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