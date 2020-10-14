import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Cover from "../components/cover"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        mobileImage: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            fluid(quality: 75, maxWidth: 768) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        desktopImage: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const sources = [
        data.mobileImage.childImageSharp.fluid,
        {
          ...data.desktopImage.childImageSharp.fluid,
          media: `(min-width: 769px)`,
        },
      ];

      return (
        <BackgroundImage
          className="w-screen h-screen overflow-y-scroll"
          fluid={sources}
        >
          <SEO title={"Detox Week"} />
          <Layout>
            <Cover />
          </Layout>
        </BackgroundImage>
      )
    }} 
  />
)

export default IndexPage