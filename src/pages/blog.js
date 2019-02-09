import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'

const Blog = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the Blog</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id} className="blog-card">
        <div className="blog-card-details">
          <h3>{post.node.frontmatter.title}</h3>
          <small>Authored By: {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
          <br />
          <br />
          <Link to={post.node.frontmatter.path}>Read More..</Link>
          <br />
        </div>
        <Img className="blog-card-img" sizes={post.node.frontmatter.featuredImage.childImageSharp.sizes} />
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            date
            author
            title
            featuredImage {
              childImageSharp{
                  sizes(maxWidth: 630) {
                      ...GatsbyImageSharpSizes
                  }
              }
            }
          }
        }
      }
    }    
  }
`

export default Blog
