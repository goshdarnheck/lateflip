import React from "react"
import PropTypes from "prop-types"
import { DateTime } from "luxon"

import Icon from "../../components/svg/lateflip-icon"
import { HomeLink, Footer, Top } from "../../components/common"
import "./mattdrian.scss"

export const fonts = ["Josefin+Sans:wght@500"]

const Mattdrian = ({ children, subheadline, date }) => {
  const header = (
    <header>
      <div>
        <HomeLink title="To the lateflip.com home page">
          <Icon />
        </HomeLink>
      </div>
      <div>
        <h1>{subheadline}</h1>
        <h2>{date.toLocaleString(DateTime.DATE_FULL)}</h2>
      </div>
    </header>
  )

  return (
    <div className="layout layout-mattdrian">
      <Top />
      <main>
        <article>{children(header)}</article>
      </main>
      <Footer />
    </div>
  )
}

Mattdrian.propTypes = {
  children: PropTypes.node.isRequired,
  subheadline: PropTypes.string,
}

export default Mattdrian
