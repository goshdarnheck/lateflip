// Please note that this layout does not render a header and any page
// needing one should render it itself if using this layout

import React from "react"
import PropTypes from "prop-types"

import { Footer, Top } from "../../components/common"
import "./mattdrian.scss"

export const fonts = ["Josefin+Sans:wght@500"]

const Mattdrian = ({ children }) => {
  return (
    <div className="layout layout-mattdrian">
      <Top />
      <main>
        <article>{children}</article>
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
