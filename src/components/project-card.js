import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import _ from "lodash"

const ProjectCard = ({ projects }) => {
  return (
    <div className="project-preview__wrapper">
      {projects.map(({ node: project }, id) => {
        const tag = _.replace(project.tag, "/", "-")
        const title = project.title
        const description = project.description
        const slug = project.slug
        const imageData = project.image.childImageSharp.fluid

        return (
          <div key={id} className="project-preview-card">
            {/* <div className="project-preview-card__header">
                <span>{tag}</span>
              </div> */}
            <div className="project-preview-card__img">
              <Link to={`/${slug}/`}>
                <Image fluid={imageData} alt={title} />
              </Link>
            </div>

            <div className="project-preview-card__text typography-fluid">
              <span
                className={`project-preview-card__text__tag project-preview-card__text__tag--${tag}`}
              >
                {tag}
              </span>
              <Link to={`/${slug}/`}>
                <span className="project-preview-card__text__title">
                  {title}
                </span>
              </Link>
              <p className="project-preview-card__text__desc"> {description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectCard
