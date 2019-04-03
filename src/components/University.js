import React, { Component } from 'react';

class University extends Component {

  render() {
    return (
      <div className="university">
        <p className="heading-secondary">{this.props.name} ({this.props.startYear} - {this.props.endYear})</p>
        <p className="italic">{this.props.degree}</p>
        <p>Major in {this.props.major}</p> 
      </div>
    );
  }
}

export default University;