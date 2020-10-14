/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import tw, { styled } from "twin.macro"

import Nav from "./nav"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Main>
        {children}
      </Main>
      {/* <Footer>
        <small>© {new Date().getFullYear()} Espaço Fit Gi Toledo</small>
      </Footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Main = styled.main`
  ${tw`w-full`}
`;

// const Footer = styled.footer`
//   ${tw`w-full bg-white px-4 py-2 text-center`}
// `;

export default Layout
