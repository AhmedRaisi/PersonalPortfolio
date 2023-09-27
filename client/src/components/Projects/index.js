import React from 'react';
import { Element } from 'react-scroll';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import './styles.css';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "MLStockPredictors",
      description: "A machine learning model trained to predict future stock market prices based on historical data.",
      aboutLink: "#",
      demoLink: "#",
      component: Project1
    },
    {
      id: 2,
      title: "Tarsho",
      description: "An e-commerce platform for boutique designers to showcase and sell their unique products.",
      aboutLink: "#",
      demoLink: "#",
      component: Project2
    },
    {
      id: 3,
      title: "DroneSim",
      description: "A realistic drone simulation application, providing users the experience of piloting various drone models.",
      aboutLink: "#",
      demoLink: "#",
      component: Project3
    },
    {
      id: 4,
      title: "2048AIOptimization",
      description: "An AI-driven model optimized to play and win the game 2048.",
      aboutLink: "#",
      demoLink: "#",
      component: Project4
    },
  ];
  

  return (
    <Element name="projectsSection">
      <div className="projectsContainer">
        <h2>My Projects</h2>
        {projectData.map(project => {
          const ProjectComponent = project.component;
          return <ProjectComponent key={project.id} data={project} />
        })}
      </div>
    </Element>
  );
};

export default Projects;
