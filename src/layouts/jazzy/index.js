import React from "react"
import PropTypes from "prop-types"
import { DateTime } from "luxon"
import { Link } from "gatsby"

import { Footer, HomeLink, Top } from "../../components/common"
import Logo from "../../components/svg/lateflip-logo"
import "./jazzy.scss"

export const fonts = ["Montserrat", "Poiret One"]

const Jazzy = ({ children, subheadline, date }) => (
  <div className="layout layout-jazzy">
    <Top />
    <main>
      <header>
        <div>
          <HomeLink title="Take me home">
            <Logo />
          </HomeLink>
        </div>
        <div>
          <h1>{subheadline}</h1>
          <h2>{date.toLocaleString(DateTime.DATE_FULL)}</h2>
        </div>
      </header>
      <article>{children}</article>
    </main>
    <Footer />
  </div>
)

Jazzy.propTypes = {
  children: PropTypes.node.isRequired,
  subheadline: PropTypes.string,
}

export default Jazzy
