import React from "react"
import ProjectCard from "./project-card"
// import ProjectIcon from "../data/images/plan_modified.svg"

const ProjectPreview = ({ projects }) => {
  return (
    <section
      className="project-preview container-fluid container-fluid--dark"
      id="project-preview"
    >
      <span className="section-title">PROJECTS</span>
      <ProjectCard projects={projects} />
    </section>
  )
}

export default ProjectPreview
