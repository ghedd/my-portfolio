import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectCard = ({ projects }) => {
  return (
    <div className="project-preview__wrapper">
      {projects.map(({ node: project }, id) => {
        const tag = project.tag
        const title = project.title
        const description = project.description
        const slug = project.slug
        const imageData = project.image.childImageSharp.fluid

        return (
          <div key={id}>
            <div className="project-preview-card">
              <div className="project-preview-card__header">
                <span>{tag}</span>
              </div>
              <div className="project-preview-card__img">
                <Link to={`/${slug}/`}>
                  <Image fluid={imageData} alt={title} />
                </Link>
              </div>
              <div className="project-preview-card__text">
                <Link to={`/${slug}/`}>
                  <h1>{title}</h1>
                </Link>
                <p> {description}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectCard
