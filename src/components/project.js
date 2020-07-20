import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
const Project = ({
  title,
  description,
  production,
  url,
  imageData,
  imageCredit,
  imageStock,
  imageStockUrl,
  authorUrl,
}) => {
  return (
    <section className="project typography-fluid container-fluid">
      <Image className="project__img" fluid={imageData} alt={title} />

      {authorUrl ? (
        <figcaption className="project__img-caption">
          photo by{" "}
          <a href={authorUrl} target="_blank" rel="noopener noreferrer">
            {imageCredit}
          </a>{" "}
          from{" "}
          <a href={imageStockUrl} target="_blank" rel="noopener noreferrer">
            {" "}
            {imageStock}
          </a>
        </figcaption>
      ) : null}
      <div className="project__description">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="project__navigation-wrapper btn__wrapper">
        {production === "not available" ? null : (
          <a
            className="btn btn--primary project__navigation"
            href={production}
            target="_blank"
            rel="noopener noreferrer"
          >
            View production build
          </a>
        )}

        <a
          className="btn btn--secondary project__navigation"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View code
        </a>

        <Link
          className="btn btn--outlined  btn--outlined-sc project__navigation"
          to="/#project-preview"
        >
          Back to projects
        </Link>
      </div>
    </section>
  )
}

export default Project
