import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Greeting = () => {
  const imageQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "office_scene.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const greetingImg = imageQuery.file.childImageSharp.fluid

  return (
    <section className="greeting">
      <div className="typography-fluid typography-fluid--greeting greeting-content">
        <h1>
          HI, I'M <span id="my-name">THINH</span>
        </h1>
        <p>
          You can also call me <span id="my-name-eng">EDDIE</span>
        </p>
        <p>I'm looking for a new oppoturnity</p>

        <div className="btn__wrapper btn__wrapper--greeting">
          <button
            className="btn btn--primary btn--wide"
            onClick={() => (window.location.href = "#project-preview")}
          >
            VIEW PROJECTS
          </button>
          <br />
          <button
            className="btn btn--secondary btn--wide"
            onClick={() => (window.location.href = "#contact")}
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
      <Img className="greeting-illustration" fluid={greetingImg} alt="hook" />
    </section>
  )
}

export default Greeting
