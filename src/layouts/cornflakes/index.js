import React from "react"
import PropTypes from "prop-types"
import { DateTime } from "luxon"
import { Link } from "gatsby"

import { Footer, HomeLink, Top } from "../../components/common"
import "./cornflakes.scss"

export const fonts = ["Montserrat", "Mr Dafoe", "Biryani:wght@800"]

const Cornflakes = ({ children, subheadline, date }) => (
  <div className="layout layout-cornflakes">
    <Top />
    <main>
      <div className="brand">Nobody's</div>
      <header>
        <div className="home-link">
          <HomeLink>
            LATE
            <br />
            <span>FLIP</span>
          </HomeLink>
          <div>
            <h1><span>{subheadline}</span></h1>
            <h2>{date.toLocaleString(DateTime.DATE_FULL)}</h2>
          </div>
        </div>
      </header>
      <article>{children}</article>
    </main>
    <Footer />
  </div>
)

Cornflakes.propTypes = {
  children: PropTypes.node.isRequired,
  subheadline: PropTypes.string,
}

export default Cornflakes
