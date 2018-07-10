import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'

export const CodeTemplate = ({
  description,
  link,
  helmet,
  title,
  date,
}) => {
  return (
    <div className="section">
      {helmet || ''}
      <div className="container content">
        <div className="content" style={{ display: 'flex'}} >
          <div className="inner-content" style={{ flexDirection: 'row', marginLeft: '30px' ,maxWidth: '600px' }} >
            <h1>{date}</h1>
            <a href={link}>
              <p>
                {title}:<span>{description}</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

CodeTemplate.propTypes = {
  link: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const Code = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <CodeTemplate
      link={post && post.frontmatter.link}
      contentComponent={HTMLContent}
      description={post && post.frontmatter.description}
      helmet={<Helmet title={`${post && post.frontmatter.title} | Code`} />}
      title={post && post.frontmatter.title}
      date={post && post.frontmatter.date}
    />
  )
}

Code.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Code

export const pageQuery = graphql`
  query CodeByIDs($id: String!) {
    markdownRemark(id: { eq : $id }) {
      id
      frontmatter {
        date(formatString: "YYYY")
        link
        title
        description
      }
    }
  }
`