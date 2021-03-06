import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'

export default function Template({data}) {
    const post = data.markdownRemark

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <div>
                <Link to="/blog">Go Back</Link>
                <hr/>
                <h1>{post.frontmatter.title}</h1>
                <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
                <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
                <div dangerouslySetInnerHTML={{__html: post.html}} />
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: { eq: $path }}) {
            html
            frontmatter {
                path
                title
                author
                date
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
`