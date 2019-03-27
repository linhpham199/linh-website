import React, { Component } from 'react';
import Tag from './Tag';

class ProjectCard extends Component {
  render() {
    return (
      <div className="card">
        <a href={this.props.link} className="card__link--web" target="_blank" rel="noopener noreferrer">
        <div className="card__side card__side--front">
          {this.props.name}
        </div>

        <div className="card__side card__side--back">
          <div className="card__intro">
            Brief introduction
          </div>
          <div className="card__link">
            <a href={this.props.link} className="card__link--mobile" target="_blank" rel="noopener noreferrer">More info</a>
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