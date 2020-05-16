import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"

import SEO from "../components/seo"
import Greeting from "../components/greeting"
import AboutMe from "../components/about-me"
// import BackToTopBtn from "../components/back-to-top-btn"
import Contact from "../components/contact"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            tag
            title
            slug
            url
            description
            imageCredit
            imageStock
            authorUrl
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges
  return (
    <Layout>
      <SEO title="Thinh Le (Eddie)" />
      <Greeting />
      <AboutMe />
      <ProjectPreview projects={projects} />
      {/* <BackToTopBtn /> */}
      <Contact />
    </Layout>
  )
}
