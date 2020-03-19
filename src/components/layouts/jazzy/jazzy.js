import React from "react"
import PropTypes from "prop-types"

import Header from "../../header"
import Footer from "../../footer"

import "./jazzy.css"

const Jazzy = ({ children, subheadline }) => (
  <div className="layout layout-jazzy">
    <div>
      <Header />
      <main>{children}</main>
    </div>
    <Footer />
  </div>
)

Jazzy.propTypes = {
  children: PropTypes.node.isRequired,
  subheadline: PropTypes.string,
}

export default Jazzy;

export const fonts = ["Montserrat", "Bebas Neue"];
