import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import Navbar from '../Navbar'
import Footer from "../Footer";

import './styles.scss'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title,
            description,
          }
        }
        footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } } }) {
          edges {
            node {
              id
              frontmatter {
                siteLogo {
                  childImageSharp {
                    fixed(width: 105, height: 47, quality: 92) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
                links_1 {
                  header,
                  links {
                    text, url
                  }
                }
                links_2 {
                  header,
                  links {
                    text, url
                  }
                }
                links_3 {
                  header,
                  links {
                    text, url
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
	        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
	        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
	
	        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
	        <meta name="theme-color" content="#fff" />

	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        {/* <Navbar /> */}
        {/* <main>{children}</main> */}
        <Footer siteName={data.site.siteMetadata.title} data={data.footerData.edges[0].node.frontmatter} />
      </div>
    )}}
  />
)

export default TemplateWrapper
