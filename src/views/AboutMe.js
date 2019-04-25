import React, { Component } from 'react';
import University from '../components/University';
import Language from '../components/Language';
import { FaGraduationCap, FaSquare } from 'react-icons/fa';

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me">
        <div>
          <div className="heading-container">
            <p className="heading-primary">About me</p>
          </div>
          <div style={{marginTop: '1.7rem'}}>
            <p>Hello, my name is Linh. Currently I am a student of Haaga-Helia University of Applied Sciences, major in software development. I am working my way to become a web developer in the near future.</p>
          </div>
        </div>
        <div className="my-education">
          <div className="heading-container">
            <p className="heading-primary heading-primary-1">Education</p>
          </div>
          <div className="list">
            <div className="list-container">
              <div className="list__item">
                <p className="my-education__list-icon-container"><FaGraduationCap className="my-education__list-icon"/></p>
                <University 
                  name="Haaga-Helia University of Applied Sciences"
                  startYear="2017"
                  endYear="current"
                  degree="Bachelor of Business Administration"
                  major="Business Information Technology" />
              </div>

              <div className="list__item">
                <p className="my-education__list-icon-container"><FaGraduationCap className="my-education__list-icon"/></p>             
                <University 
                  name="Foreign Trade University"
                  startYear="2012"
                  endYear="2016"
                  degree="Bachelor of Economics"
                  major="International Business Economics" />
              </div>
            </div>
          </div>
        </div>
        <div className="my-languages">
          <div className="heading-container">
            <p className="heading-primary heading-primary-1">Languages</p>
          </div>
          <div className="list">
            <div style={{marginTop: '8px'}}>
              <div className="list__item">
                <FaSquare className="my-languages__list-icon"/>
                <Language language="English" proficiency="Professional" />
              </div>
              <div className="list__item">
                <FaSquare className="my-languages__list-icon"/>                
                <Language language="Finnish" proficiency="Very basic" />
              </div>
              <div className="list__item">
                <FaSquare className="my-languages__list-icon"/>
                <Language language="Vietnamese" proficiency="Native" /> 
              </div>
            </div>
          </div>
        </div>
      </div>      
    );
  }
}

export default AboutMe;