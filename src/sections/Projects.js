import React from "react";
import Section from "../components/Section";
import { links, projects } from "../constants";
import { useProjectsStyles } from "../hooks/styles/useProjectsStyles";

const Projects = () => {
  const classes = useProjectsStyles();

  return (
    <Section id={links.projects}>
      {projects.map((project) => (
        <div className={classes.card}>
          <h2 className={classes.title}>{project.title}</h2>
          <p className={classes.desc}>{project.desc}</p>
          <a target="_blank" href={project.github}>
            Github
          </a>
          <a target="_blank" href={project.deployed}>
            Demo
          </a>
        </div>
      ))}
    </Section>
  );
};

export default Projects;
