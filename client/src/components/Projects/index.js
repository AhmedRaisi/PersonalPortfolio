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
      title: "Project 1",
      aboutLink: "#",
      demoLink: "#",
      component: Project1
    },
    {
      id: 2,
      title: "Project 2",
      aboutLink: "#",
      demoLink: "#",
      component: Project2
    },
    {
      id: 3,
      title: "Project 3",
      aboutLink: "#",
      demoLink: "#",
      component: Project3
    },
    {
      id: 4,
      title: "Project 4",
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
