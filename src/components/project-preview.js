import React from "react"
import ProjectCard from "./project-card"

const ProjectPreview = ({ projects }) => {
  return (
    <>
      <div className="project-preview" id="project-preview">
        <h1>Projects</h1>
        <ProjectCard projects={projects} />
      </div>
    </>
  )
}

export default ProjectPreview
