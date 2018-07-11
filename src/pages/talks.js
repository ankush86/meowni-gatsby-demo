import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import _ from 'lodash';

class Talks extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const group = _.groupBy(posts,(e) => new Date(e.node.frontmatter.date).getFullYear());
    const keys = Object.keys(group);
    const postKeys = _.sortBy(keys).reverse();
    return (
      <div className="section">
        <div className="top-line"></div>
        <div className="container content">
          <div className="content" style={{ display: 'flex'}} >
            <div className="inner-content" style={{ flexDirection: 'row', marginLeft: '30px' ,maxWidth: '600px' }} >
              <h1 className='rainbow' style={{ fontSize: '36px', marginBottom: '40px', fontWeight: '900' }}>Talks</h1>
              {postKeys.map(key => (
                <div className="content" key={key} >
                  <h3 className="rainbow" >{key}</h3>
                  {group[key].map(({node: post}) => (
                    <p key={post.id} className="content-listing" style={{ display: 'flex' }} >
                      {
                        (post.frontmatter.link !== ' ') ? 
                          <a className="primary-text-custom" href={post.frontmatter.link} dangerouslySetInnerHTML={{ __html: post.html }}></a> : 
                          <span dangerouslySetInnerHTML={{ __html: post.html }}></span>
                      }
                      {
                        (post.frontmatter.description !== ' ') ?
                          <span className="description">- {post.frontmatter.description}</span> :
                          null
                      }
                      {
                        post.frontmatter.video_link ? <a href={post.frontmatter.video_link}> [video]</a> : null
                      }
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
  query Talks{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "talk" } }}
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            date(formatString: "YYYY")
            description
            link
            templateKey
            title
            video_link
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
