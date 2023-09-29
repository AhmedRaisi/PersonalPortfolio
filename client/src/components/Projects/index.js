import React from 'react';
import { Element } from 'react-scroll';
import Project from './Project'; 
import Project1 from './Project1';  // Use the generic 'Project' component
import Project2 from './Project2';  
import Project3 from './Project3';  
import Project4 from './Project4';  
import './styles.css';

const Projects = () => {
    const projectData = [
        {
            id: 1,
            title: "ML Stock Predictors",
            description: "A machine learning model trained to predict future stock market prices based on historical data.",
            techStack: ["Python", "TensorFlow", "Keras", "Pandas", "Numpy"],
            features: ["Time series forecasting", "Deep learning", "Interactive visualization"],
            demoLink: "https://github.com/AhmedRaisi/MLStockPredictor",
            component: Project1
        },
        {
            id: 2,
            title: "Tarsho",
            description: "An e-commerce platform for boutique designers to showcase and sell their unique products.",
            techStack: ["React", "Node.js", "MongoDB", "Express.js", "Redux"],
            features: ["User authentication", "Shopping cart", "Product search & filters"],
            demoLink: "https://github.com/AhmedRaisi/Tarsho",
            component: Project2
        },
        {
          id: 3,
          title: "Drone Simulation",
          description: "A realistic drone simulation application, providing users the experience of piloting various drone models.",
          techStack: ["React", "Node.js", "MongoDB", "Express.js", "Redux"],
          features: ["User authentication", "Shopping cart", "Product search & filters"],
          demoLink: "https://github.com/AhmedRaisi/DroneSim",
          component: Project3
        },
        {
          id: 4,
          title: "2048: AI Optimization",
          description: "An AI-driven model optimized to play and win the game 2048.",
          techStack: ["React", "Node.js", "MongoDB", "Express.js", "Redux"],
          features: ["User authentication", "Shopping cart", "Product search & filters"],
          demoLink: "https://github.com/AhmedRaisi/2048AIOptimization",
          component: Project4
        },
    ];
    return (
      <Element name="projectsSection">
          <div className="projectsContainer">
              <h2>My Projects</h2>
              {projectData.map(project => {
                  if (project.component) { // if specific component is provided
                      const SpecificProjectComponent = project.component;
                      return <SpecificProjectComponent key={project.id} data={project} />
                  }
                  return <Project key={project.id} data={project} />; // default to generic component
              })}
          </div>
      </Element>
  );
};

export default Projects;
