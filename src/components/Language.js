import React, { Component } from 'react';

class Language extends Component {
  render() {
    return (
      <p>
        {this.props.language} - {this.props.proficiency}
      </p>
    );
  }
}

export default Language;