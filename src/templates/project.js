import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

export const CodeTemplate = ({
  date,
  description,
  helmet,
  link,
  title,
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
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
  link: PropTypes.string.isRequired,
  title: PropTypes.string,
}

const Code = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <CodeTemplate
      date={post && post.frontmatter.date}
      description={post && post.frontmatter.description}
      helmet={<Helmet title={`${post && post.frontmatter.title} | Code`} />}
      link={post && post.frontmatter.link}
      title={post && post.frontmatter.title}
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
        description
        link
        title
      }
    }
  }
`
