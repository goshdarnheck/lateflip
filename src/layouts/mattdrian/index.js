import React from "react"
import PropTypes from "prop-types"
import { DateTime } from "luxon"

import HomeLink from "../../components/home-link"
import Top from "../../components/top"
import Footer from "../../components/footer"
import Logo from "../../components/svg/lateflip-logo"
import "./mattdrian.scss"

export const fonts = []

const Mattdrian = ({ children, subheadline, date }) => (
  <div className="layout layout-mattdrian">
    <Top />
    <main>
      <header>
        <div>
          <HomeLink title="To the lateflip.com home page">
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

Mattdrian.propTypes = {
  children: PropTypes.node.isRequired,
  subheadline: PropTypes.string,
}

export default Mattdrian
