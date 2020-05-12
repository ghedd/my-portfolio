import React from "react"
import ProjectCard from "./project-card"
import ProjectIcon from "../data/images/plan_modified.svg"

const ProjectPreview = ({ projects }) => {
  return (
    <section
      className="project-preview container-fluid container-fluid--dark"
      id="project-preview"
    >
      <div className="section-icon__container">
        <img
          clasName="section-icon__icon"
          src={ProjectIcon}
          alt="project icon"
        />
      </div>
      <div className="section-content">
        <span className="section-title">PROJECTS</span>
        <div className="project-preview__wrapper">
          <ProjectCard projects={projects} />
        </div>
      </div>
    </section>
  )
}

export default ProjectPreview
