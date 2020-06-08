import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
// import DeskScene from "../data/images/desk_scene.svg"

const AboutMe = () => {
  const imageQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "desk_scene.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const aboutImg = imageQuery.file.childImageSharp.fluid

  return (
    <section id="about-me" className="about container-fluid">
      <div className="about__content content-wrapper typography-fluid">
        <span className="section-title">ABOUT</span>
        <p>
          I'm enthusiastic about{" "}
          <span className="about-highlight">web applications</span> and{" "}
          <span className="about-highlight">the Internet</span>. I'm a
          passionate learner who desires to land my next job as a{" "}
          <i>
            <span className="about-highlight">front-end web developer</span>
          </i>
          . I'm so insterested in discovering knowledge about front-end
          technologies such as <span className="about-highlight">HTML5</span>/
          <span className="about-highlight">CSS3</span>,{" "}
          <span className="about-highlight">JavaScript</span> and{" "}
          <span className="about-highlight"> React</span>/
          <span className="about-highlight">Redux</span>. In fact, I've got{" "}
          <a href="#project-preview">
            <span className="about-highlight about-link-to-projects">
              several projects
            </span>
          </a>{" "}
          which I'm very excited to show you .
        </p>
      </div>
      <div className="about__illustration">
        <Img
          className="about__illustration__img illustration"
          fluid={aboutImg}
          alt="my desk"
        />
      </div>
    </section>
  )
}

export default AboutMe
