import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/project"
import SEO from "../components/seo"
// import Reconstructing from "../components/reconstructing"

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
      imageStockUrl
      authorUrl
      image {
        childImageSharp {
          fluid(maxWidth: 2048) {
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
  const production = project.production
  const url = project.url
  const imageData = project.image.childImageSharp.fluid
  const imageCredit = project.imageCredit
  const imageStock = project.imageStock
  const imageStockUrl = project.imageStockUrl
  const authorUrl = project.authorUrl

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Project
        title={title}
        description={description}
        production={production}
        url={url}
        imageStock={imageStock}
        imageData={imageData}
        imageCredit={imageCredit}
        imageStockUrl={imageStockUrl}
        authorUrl={authorUrl}
      />
      {/* <Reconstructing /> */}
    </Layout>
  )
}

export default ProjectTemplate
