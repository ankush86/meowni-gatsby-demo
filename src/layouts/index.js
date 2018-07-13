import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Bio from '../pages/bio';
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Welcome - Nitin Kadam" />
    <div className="main">
      <Bio />
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
