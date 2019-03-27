import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';

class MyProjects extends Component {
  render() {
    return (
      <div className="cards-collection">
        <ProjectCard name="Personal Training Company" link="#" languages={['Java', 'HTML']} />
        <ProjectCard name="Personal Training Company" link="#" languages={['Java', 'HTML']}/>
        <ProjectCard name="Personal Training Company" link="#" languages={['Java', 'HTML']}/>
        <ProjectCard name="Personal Training Company" link="#" languages={['Java', 'HTML']}/>
        <ProjectCard name="Personal Training Company" link="#" languages={['Java', 'HTML']}/> 
        <ProjectCard name="Personal Training Company" link="#" languages={['Java', 'HTML']}/>                        
        <ProjectCard name="Personal Training Company" link="#" languages={['Java', 'HTML']}/>                                                       
      </div>
    );
  }
}

export default MyProjects;