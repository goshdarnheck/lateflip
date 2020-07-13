import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Footer, HomeLink, Top } from "../../components/common"
import Logo from "../../components/svg/lateflip-logo"
import "./first.css"

export const fonts = ["Montserrat", "Bebas Neue"]

const First = ({ children, subheadline }) => (
  <div className="layout layout-first">
    <Top />
    <div>
      <main
        style={{
          padding: `1em`,
          position: "relative",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <HomeLink>
            <Logo />
          </HomeLink>
        </h1>
        {subheadline && (
          <div
            style={{
              position: "absolute",
              boxShadow: "0.5em 0.5em #000",
              top: "5%",
              left: "5%",
              display: "inline-block",
              backgroundColor: "#fff",
              border: "0.4em solid #000",
              borderRadius: "1em",
              padding: "2em",
            }}
          >
            {subheadline}
          </div>
        )}
        <article>{children}</article>
      </main>
    </div>
    <Footer />
  </div>
)

First.propTypes = {
  children: PropTypes.node.isRequired,
  subheadline: PropTypes.string,
}

export default First
