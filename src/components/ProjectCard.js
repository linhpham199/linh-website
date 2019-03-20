import React, { Component } from 'react';

class ProjectCard extends Component {
  render() {
    return (
      <div className="card">
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
        <div className="card__side card__side--front">
          {this.props.name}
        </div>

        <div className="card__side card__side--back">
          (programming language tags)
        </div>
        </a>
      </div>
    );
  }
}

export default ProjectCard;