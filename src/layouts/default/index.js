import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Top from "../../components/top"
import Footer from "../../components/footer"
import Logo from "../../components/svg/lateflip-logo"

import "./default.scss"

export const fonts = ["Montserrat"]

const Default = ({ children }) => (
  <div className="layout layout-default">
    <main>
      <Top />
      <header>
        <h1>
          <Link to="/">
            <Logo />
          </Link>
        </h1>
      </header>
      <article>{children}</article>
    </main>
    <Footer />
  </div>
)

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default
