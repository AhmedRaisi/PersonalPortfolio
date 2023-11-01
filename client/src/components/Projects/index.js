import React from 'react';
import { Element } from 'react-scroll';
import Project from './Project'; 
import './styles.css';

const Projects = () => {
    const projectData = [
        {
            title: "ML Stock Predictors",
            description: "A machine learning model trained to predict future stock market prices based on historical data.",
            techStack: ["Python", "TensorFlow", "Keras", "Pandas", "Numpy"],
            features: ["Time series forecasting", "Deep learning", "Interactive visualization"],
            demoLink: "https://github.com/AhmedRaisi/MLStockPredictor",
            githubLink: "https://github.com/AhmedRaisi/MLStockPredictor", 
        },
        {
            title: "Tarsho",
            description: "An e-commerce platform for boutique designers to showcase and sell their unique products.",
            techStack: ["React", "Node.js", "MongoDB", "Express.js", "Redux"],
            features: ["User authentication", "Shopping cart", "Product search & filters"],
            demoLink: "https://github.com/AhmedRaisi/Tarsho",
            githubLink: "https://github.com/AhmedRaisi/Tarsho", 
        },
        {
          title: "Drone Simulation",
          description: "A realistic drone simulation application, providing users the experience of piloting various drone models.",
          techStack: ["React", "Node.js", "MongoDB", "Express.js", "Redux"],
          features: ["User authentication", "Shopping cart", "Product search & filters"],
          demoLink: "https://github.com/AhmedRaisi/DroneSim",
          githubLink: "https://github.com/AhmedRaisi/DroneSim", 
        },
        {
          title: "2048: AI Optimization",
          description: "An AI-driven model optimized to play and win the game 2048.",
          techStack: ["React", "Node.js", "MongoDB", "Express.js", "Redux"],
          features: ["User authentication", "Shopping cart", "Product search & filters"],
          demoLink: "https://github.com/AhmedRaisi/2048AIOptimization",
          githubLink: "https://github.com/AhmedRaisi/2048AIOptimization", 
        },
    ];
    return (
        <Element name="projectsSection">
            <div className="projectsContainer">
                <h2>My Projects</h2>
                {projectData.map(project => (
                    <Project key={project.id} data={project} />
                ))}
            </div>
        </Element>
    );
};

export default Projects;
