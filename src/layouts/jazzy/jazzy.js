import React from "react"
import PropTypes from "prop-types"

import Header from "../../components/header"
import Footer from "../../components/footer"
import Logo from "../../components/svg/lateflip-logo"
import "./jazzy.css"

export const fonts = ["Montserrat", "Poiret One"]

const Jazzy = ({ children, subheadline }) => (
  <div className="layout layout-jazzy">
    <Header />
    <main>
      <header>
        <div><Logo /></div>
        <h1>{subheadline}</h1>
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
