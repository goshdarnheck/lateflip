import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Top from "../../components/top"
import Footer from "../../components/footer"
import Logo from "../../components/svg/lateflip-logo"

import "./archive.scss"

export const fonts = ["Montserrat", "Source+Code+Pro:wght@900"]

const Archive = ({ children }) => (
  <div className="layout layout-archive">
    <main>
      <Top />
      <header>
        <Link to="/" title="Home">
          <Logo />
        </Link>
      </header>
      <article>{children}</article>
    </main>
    <Footer />
  </div>
)

Archive.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Archive
