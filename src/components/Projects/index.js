import React from "react";
import { SectionTitle } from "../GlobalComponents";
import Section from "../GlobalComponents/Section";
import { ProjectsContainer } from "./ProjectsStyles";
import projectsList from "../../data/projects/projects";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectsContainer>
        {projectsList.map((project) => (
          <ProjectItem {...project} key={project.title} />
        ))}
      </ProjectsContainer>
    </Section>
  );
}

export default Projects;
