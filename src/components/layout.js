/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../style/custom-style.css"
import "../style/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main className="container-fluid">{children}</main>
      <footer>
        <span>
          © {new Date().getFullYear()} by Thinh Le (Eddie), built with
          {` `}
          <a
            href="https://www.gatsbyjs.org"
            style={{ color: "whitesmoke", textDecoration: "underline" }}
          >
            Gatsby
          </a>
        </span>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
