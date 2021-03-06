/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:image`,
            content: "https://i.postimg.cc/66hXgt2B/twitter-header-photo-2.png",
          },

          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            name: `twitter:image`,
            content: "https://i.postimg.cc/66hXgt2B/twitter-header-photo-2.png",
          },
          {
            itemprop: `name`,
            content: `Thinh (Eddie) Le`,
          },
          {
            itemprop: `description`,
            content: metaDescription,
          },
          {
            itemprop: `image`,
            content: "https://i.postimg.cc/66hXgt2B/twitter-header-photo-2.png",
          },
        ].concat(meta)}
      />
      <Helmet>
        <meta
          name="google-site-verification"
          content="Aee5Sz7tPTwc5RUB475kAEjzgv4mNhmP7wK7DPkrBoM"
        />
        <link rel="canonical" href="https://teddlecodes.com" />
      </Helmet>
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
