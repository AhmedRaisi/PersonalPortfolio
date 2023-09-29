import React from 'react';
import './styles.css';
import { Element } from 'react-scroll';
import htmlLogo from './../../assets/html.png';
import cssLogo from './../../assets/css.png';
import jsLogo from './../../assets/js.png';
import reactLogo from './../../assets/react.png';
import angularLogo from './../../assets/angular.png';
import nodejsLogo from './../../assets/Node_logo_NodeJS.png';
import expressLogo from './../../assets/express.png';
import djangoLogo from './../../assets/Django-Logo.png';
import mySQLLogo from './../../assets/sql.png';
import mongodbLogo from './../../assets/mongodb-logo-png.png';
import tensorflowLogo from './../../assets/Tensorflow_logo.svg.webp';
import pytorchLogo from './../../assets/pytorch_logo_icon_169823.png';
import pandasLogo from './../../assets/pandas.png';
import scikitLogo from './../../assets/scikit.png';



const Skills = () => {
    const frontEndSkills = [
        { name: "HTML", logo: htmlLogo },
        { name: "CSS", logo: cssLogo },
        { name: "JavaScript", logo: jsLogo },
        { name: "React", logo: reactLogo },
        { name: "Angular", logo: angularLogo }
    ];
    
    const backEndSkills = [
        { name: "Node.js", logo: nodejsLogo },
        { name: "Express.js", logo: expressLogo },
        { name: "Django", logo: djangoLogo },
        { name: "MySQL", logo: mySQLLogo },
        { name: "MongoDB", logo: mongodbLogo }
    ];
    
    const mlDataAnalyticsSkills = [
        { name: "TensorFlow", logo: tensorflowLogo },
        { name: "PyTorch", logo: pytorchLogo },
        { name: "Pandas", logo: pandasLogo },
        { name: "SciKit-Learn", logo: scikitLogo }
    ];

    return (
        <Element name="skillsSection">
            <div className="skills-container">
                <div className="skills-title">My Skills</div>
                <div className="skills-wrapper">
                    <SkillSection title="Front-end" skills={frontEndSkills} />
                    <SkillSection title="Back-end" skills={backEndSkills} />
                    <SkillSection title="Machine Learning & Data Analytics" skills={mlDataAnalyticsSkills} />
                </div>
            </div>
        </Element>
    );
}

const SkillSection = ({ title, skills }) => {
    return (
        <div className="skill-section">
            <h2>{title}</h2>
            <div className="skills-row">
                {skills.map((skill, index) => (
                    <img key={index} src={skill.logo} alt={skill.name} title={skill.name} className="skill-logo" />
                ))}
            </div>
        </div>
    );
}


export default Skills;
