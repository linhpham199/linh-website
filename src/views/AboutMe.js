import React, { Component } from 'react';
import University from '../components/University';
import Language from '../components/Language';

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me">
        <div>
          <h2 className="heading-primary">Hello, I'm Linh. </h2>
          Currently I am a student of Haaga-Helia University of Applied Sciences, major in software development. I am working my way to become a web developer in the near future.
        </div>
        <div className="my-education">
          <h2 className="heading-primary">Education</h2>
          <University 
            name="Haaga-Helia University of Applied Sciences"
            startYear="2017"
            endYear="current"
            degree="Bachelor of Business Administration"
            major="Business Information Technology" />

          <University 
            name="Foreign Trade University"
            startYear="2012"
            endYear="2016"
            degree="Bachelor of Economics"
            major="International Business Economics" />
        </div>
        <div className="my-languages">
        <h2 className="heading-primary">Languages</h2>
          <div className="my-languages__list">
            <Language language="English" proficiency="Professional" />
            <Language language="Finnish" proficiency="Very basic" />
            <Language language="Vietnamese" proficiency="Native" /> 
          </div>
        </div>
      </div>      
    );
  }
}

export default AboutMe;