import React from "react"
import ProjectCard from "./project-card"

const ProjectPreview = ({ projects }) => {
  return (
    <>
      <div className="project-preview" id="project-preview">
        <h1>Projects</h1>
        <div className="project-preview__wrapper">
          <ProjectCard projects={projects} />
        </div>
      </div>
    </>
  )
}

export default ProjectPreview
