import React, { Component } from 'react';
import University from '../components/University';
import Language from '../components/Language';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <div>
          This is about me.
          This is also about me
        </div>

        <h2>Education</h2>
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

        <h2>Languages</h2>
        <Language language="English" proficiency="Professional" />
        <Language language="Finnish" proficiency="Very basic" />
        <Language language="Vietnamese" proficiency="Native" /> 
      </div>

           
    );
  }
}

export default AboutMe;