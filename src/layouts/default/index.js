import React from "react"
import PropTypes from "prop-types"

import { Footer, HomeLink, Top } from "../../components/common"
import Logo from "../../components/svg/lateflip-logo"
import "./default.scss"

export const fonts = ["Londrina Sketch", "Monoton"]

const Default = ({ children }) => (
  <div className="layout layout-default">
    <main>
      <Top />
      <header>
        <HomeLink>
          <Logo />
        </HomeLink>
      </header>
      <article>
        <div>
          <div>{children}</div>
        </div>
      </article>
    </main>
    <Footer />
  </div>
)

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default
