import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Bio from './bio';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="content" style={{ display: 'flex'}} >
            <Bio />
            <div className="inner-content" style={{ flexDirection: 'row', marginLeft: '30px' ,width: '80%' }} >
              {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  key={post.id}
                >
                  <p>
                    <Link style={{ color: '#000 !important' }} to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
