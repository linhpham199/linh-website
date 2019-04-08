import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';

const myProjects = [
  {name: "Food Recipes", code: "fr", link: "https://github.com/linhpham199/food_recipes", languages: ["React Native"], 
    description: "Mobiles app for finding food recipes. Recipes can be added to favourites or shopping list. App supports finding neareast markets for shopping."},
  {name: "Work-out plan management", code: "wpm", link: "https://github.com/linhpham199/workoutPlanManagement/blob/master/README.md", languages: ["Java", "Spring Boot"],
    description: "Management application for different roles: user and admin. User can access to limited functions of the app comparing to admin role."},
  {name: "Forkify", code: "fork", link: "https://github.com/linhpham199/forkify-app", languages: ["JavaScript"],
    description: "Web application for find food recipes."},
  {name: "Pig game", code:"pg", link: "https://github.com/linhpham199/pig-game", languages: ["JavaScript"],
    description: "Rolling dice game for 2 people"},
  {name: "Personal budget", code: "pb", link: "https://github.com/linhpham199/budget-app", languages: ["JavaScript"],
    description: "App for controlling personal income and outcome"},
  {name: "Training Company", code: "tc", link: "https://github.com/linhpham199/trainingCompany", languages: ["React"],
    description: "An application for personal trainer to store customers’ information, training plans and training schedule. Using Firebase for authentication."}
]

class MyProjects extends Component {
  render() {
    return (
      <div className="cards-collection">
        {
          myProjects.map((prj, i) => {
            return <ProjectCard key={i} code={prj.code} name={prj.name} link={prj.link} languages={prj.languages} description={prj.description} />
          })
        }                                                     
      </div>
    );
  }
}

export default MyProjects;