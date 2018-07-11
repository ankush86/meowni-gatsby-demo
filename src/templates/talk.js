import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class Talks extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const group = _.groupBy(posts,(e) => new Date(e.node.frontmatter.date).getFullYear());
    const keys = Object.keys(group);
    const postKeys = _.sortBy(keys).reverse();
    return (
      <div className="section">
        <div className="container content">
          <div className="content" style={{ display: 'flex'}} >
            <div className="inner-content" style={{ flexDirection: 'row', marginLeft: '30px' ,maxWidth: '600px' }} >
              <h1 className='rainbow' style={{ fontSize: '36px', marginBottom: '40px', fontWeight: '900' }}>Silly projects I've done </h1>
              <p style={{ fontSize: '18px' }}>
                Most of them involve emoji. The rest of them probably involve cats. All of them live on{' '}
                <a className='rainbow' href='https://github.com/notwaldorf'>GitHub.</a>
              </p>
              {postKeys.map(key => (
                <div className="content" key={key} >
                  <h3 className="rainbow" >{key}</h3>
                  {group[key].map(({node: post}) => (
                    <p key={post.id} className="content-listing" >
                      <a className="has-text-primary" href={post.frontmatter.link}>
                        {post.frontmatter.title}:<span> {post.frontmatter.description}</span>
                      </a>
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )    
  }
} 

Talks.propTypes = {
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
  link: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default Talks

export const pageQuery = graphql`
  query TalksTemplate {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "talk" } }}
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "YYYY")
            description
            link
            templateKey
            title
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
