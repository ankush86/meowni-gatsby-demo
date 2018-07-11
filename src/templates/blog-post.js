import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  date,
  description,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns" style={{ display: 'flex'}} >
          <div className="column is-10 is-offset-1" style={{ flexDirection: 'row', marginLeft: '30px' ,maxWidth: '600px' }} >
            <p className="pageDate" >{date}</p>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light rainbow">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent className="page" content={content} />
          </div>
        </div>
      </div>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  date: PropTypes.string,
  description: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      date={post.frontmatter.date}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      title={post.frontmatter.title}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        title
      }
    }
  }
`
