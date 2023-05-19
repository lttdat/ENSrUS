/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
        <div class="container w3-center" style="margin-bottom:32px">
    <img src="../images/gatsby-astronaut.png" alt="Banner" class="responsive">
</div>
</main>
        <footer
          style={{
            marginTop: `2rem`,
            textAlign: `center`,
          }}
        >
          © {new Date().getFullYear()}, Built with love for your support on
          {` `}
          <a href="https://opensea.io/dat_eth" target="_blank">Opensea</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
