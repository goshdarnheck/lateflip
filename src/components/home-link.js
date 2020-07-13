import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const HomeLink = ({ children, title }) => (
  <Link to="/" title={title}>
    {children}
  </Link>
)

HomeLink.defaultProps = {
  title: "Home",
}

HomeLink.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
}

export default HomeLink
