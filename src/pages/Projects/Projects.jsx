import React from "react";
import "./Projects.css";
import projectImg from "../../assets/code.png";
import { BsGithub } from "react-icons/bs";
import { projects } from "../../projects-data";
import { useRef } from "react";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container container">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="header-line"></div>
        </div>
        {/* ======= Projects ========= */}
        {projects.map((project) => {
          const { id, title, description, image, link, githubLink, libraries } =
            project;
          return (
            <div key={id} className="project">
              <a href={link} target="_blank" className="project-image">
                <img src={image} alt="project" />
                <div className="project-cursor">View Project</div>
              </a>
              <div className="project-text">
                <div className="project-title">
                  <p>{title}</p>
                  {/* Github icon */}
                  <a href={githubLink} target="_blank">
                    <span className="github-icon">
                      <BsGithub />
                    </span>
                    View Code
                  </a>
                </div>
                <p className="project-description">{description}</p>
                <div className="underline"></div>
                <div className="project-libraries">
                  <ul>
                    {libraries.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
