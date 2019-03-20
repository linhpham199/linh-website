import React, { Component } from 'react';

class ProjectCard extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.name}
        </div>

        <div>
          (programming language tags)
        </div>
      </div>
    );
  }
}

export default ProjectCard;