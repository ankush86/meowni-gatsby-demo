import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import Helmet from 'react-helmet'

class About extends React.Component {
  render() {
    const data = this.props.data.markdownRemark
    const title = 'About' + this.props.data.site.siteMetadata.title
    return (
      <div className="section">
        <div className="top-line"></div>
        <Helmet title={title} />
        <div className="container">
          <div className="content" style={{ display: 'flex'}} >
            <div style={{ width: '600px', marginLeft: '30px', fontSize: '18px', fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' }}>
              <HTMLContent  className="about"  content={data.html} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About

export const pageQuery = graphql`
query AboutByID($id: String!) {
  markdownRemark(id: { eq: $id }) {
    id
    excerpt
    html
    fields {
      slug
    }
    frontmatter {
      date
      description
      title
    }
  }
  site {
    siteMetadata {
      title
    }
  }
}`
