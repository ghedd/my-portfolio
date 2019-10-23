import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { MdArrowBack, MdArrowForward } from "react-icons/md"
const Project = ({
  title,
  description,
  production,
  url,
  imageData,
  imageCredit,
  imageStock,
  authorUrl,
}) => {
  return (
    <div className="project">
      <Image className="project__img" fluid={imageData} alt={title} />

      <figcaption className="project__img-caption">
        photo by{" "}
        <a href={authorUrl} target="_blank" rel="noopener noreferrer">
          {imageCredit}
        </a>{" "}
        from{" "}
        <a href={imageStock} target="_blank" rel="noopener noreferrer">
          {" "}
          Burst
        </a>
      </figcaption>
      <div className="project__description">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="project__navigation-wrapper">
        {/* {production.length > 0 ? (
          <p className="project__navigation">
            <a href={production} target="_blank" rel="noopener noreferrer">
              <MdArrowForward className="project__navigation-arrow" />
            </a>
            <a href={production} target="_blank" rel="noopener noreferrer">
              View production build
            </a>
          </p>
        ) : (
          <div></div>
        )} */}
        <p className="project__navigation">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <MdArrowForward className="project__navigation-arrow" />
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            View code
          </a>
        </p>
        <p className="project__navigation">
          <Link to="/#project-preview">
            <MdArrowBack className="project__navigation-arrow" />
          </Link>
          <Link to="/#project-preview">Back to projects</Link>
        </p>
      </div>
    </div>
  )
}

export default Project
