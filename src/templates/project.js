import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import Project from "../components/project"
import SEO from "../components/seo"
import Reconstructing from "../components/reconstructing"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      tag
      title
      slug
      url
      description
      production
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
`

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson
  const title = project.title
  const description = project.description
  // const production = project.production
  // const url = project.url
  // const imageData = project.image.childImageSharp.fluid
  // const imageCredit = project.imageCredit
  // const imageStock = project.imageStock
  // const authorUrl = project.authorUrl

  return (
    <Layout>
      <SEO title={title} description={description} />
      {/* <Project
        title={title}
        description={description}
        production={production}
        url={url}
        imageData={imageData}
        imageCredit={imageCredit}
        imageStock={imageStock}
        authorUrl={authorUrl}
      /> */}
      <Reconstructing />
    </Layout>
  )
}

export default ProjectTemplate
