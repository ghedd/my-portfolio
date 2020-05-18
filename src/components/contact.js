import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import ContactForm from "../components/contact-form"

// import ConvoScene from "../data/images/convo_scene.png"
import ContactInfo from "./contact-info"

const Contact = () => {
  const imageQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "convo_scene.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const contactImg = imageQuery.file.childImageSharp.fluid
  return (
    <section className="contact container-fluid" id="contact">
      <span className="section-title">GET IN TOUCH</span>
      <div className="contact-wrapper">
        <ContactInfo />
        <ContactForm />
        <div className="contact__illustration">
          <Img
            className="contact__illustration__img illustration"
            fluid={contactImg}
            alt="conversation"
          />
        </div>
      </div>
    </section>
  )
}
export default Contact
