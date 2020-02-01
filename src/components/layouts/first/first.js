import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Header from "../../header"
import Footer from "../../footer"
import Logo from "./logo"

import "./first.css"

const First = ({ children, subheadline }) => (
  <div className="layout layout-first">
    <div>
      <Header />
      <div
        style={{
          padding: `1em`,
          position: "relative",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link to="/">
            <Logo />
          </Link>
        </h1>
        {subheadline && (
          <div
            style={{
              position: "absolute",
              boxShadow: "0.5em 0.5em #000",
              bottom: "5%",
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
      </div>
      <main
        style={{
          display: "grid",
          gridGap: "2em",
          gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
          gridAutoRows: "80px",
          gridAutoFlow: "dense",
          padding: "2em",
        }}
      >
        {children}
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
