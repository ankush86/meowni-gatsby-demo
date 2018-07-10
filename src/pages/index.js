import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash';
import Link from 'gatsby-link'
import './index.css';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const group = _.groupBy(posts,(e) => new Date(e.node.frontmatter.date).getFullYear());
    const keys = Object.keys(group);
    const postKeys = _.sortBy(keys).reverse();
    return (
      <div className="post-content">
        <div className="top-line"></div>
        <div className="section">
          <div className="container">
            <div className="content" style={{ display: 'flex'}} >
              <div className="inner-content" style={{ flexDirection: 'row', marginLeft: '30px' ,maxWidth: '600px' }} >
                {postKeys.map(key => (
                  <div className="content" key={key} >
                    <h3 className="rainbow" >{key}</h3>
                    {group[key].map(({node: post}) => (
                    
                      <p key={post.id} className="content-listing" >
                        <Link className="primary-text-custom" to={post.fields.slug}>
                          {post.frontmatter.title}
                        </Link>
                        <small className="dateShow" >{post.frontmatter.date}</small>
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>    
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
    site {
      siteMetadata {
        title
      }
    }
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
