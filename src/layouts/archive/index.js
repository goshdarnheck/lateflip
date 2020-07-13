import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Footer, HomeLink, Top } from "../../components/common"
import Logo from "../../components/svg/lateflip-logo"
import "./archive.scss"

export const fonts = ["Roboto", "Source+Code+Pro:wght@900"]

const Archive = ({ children, subheadline, date }) => (
  <div className="layout layout-archive">
    <main>
      <Top />
      <header>
        <HomeLink>
          <Logo />
        </HomeLink>
      </header>
      <article>
        <h1>{subheadline}</h1>
        {children}
      </article>
    </main>
    <Footer />
  </div>
)

Archive.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Archive
