import React from 'react';
import './styles.css';
import { Element } from 'react-scroll';

const Skills = () => {
    const frontEndSkills = ["HTML", "CSS", "JavaScript", "React", "Vue.js"];
    const backEndSkills = ["Node.js", "Express.js", "Django", "Ruby on Rails"];
    const mlDataAnalyticsSkills = ["TensorFlow", "PyTorch", "Pandas", "SciKit-Learn"];

    return (
        <Element name="skillsSection">
        <div className="skills-container">
            <SkillSection title="Front-end" skills={frontEndSkills} />
            <SkillSection title="Back-end" skills={backEndSkills} />
            <SkillSection title="Machine Learning & Data Analytics" skills={mlDataAnalyticsSkills} />
        </div>
        </Element>
    );
}

const SkillSection = ({ title, skills }) => {
    return (
        <div className="skill-section">
            <h2>{title}</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;
