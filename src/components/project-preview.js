import React from "react"
import ProjectCard from "./project-card"

const ProjectPreview = ({ projects }) => {
  return (
    <section className="project-preview" id="project-preview">
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
