import React from "react"
import ProjectCard from "./project-card"

const ProjectPreview = ({ projects }) => {
  return (
    <>
      <div className="project-preview" id="project-preview">
        <h2>Projects</h2>
        <div className="project-preview__wrapper">
          <ProjectCard projects={projects} />
        </div>
      </div>
    </>
  )
}

export default ProjectPreview
