import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Header from "../../header"
import Footer from "../../footer"
import Logo from "./logo"

import "./default.css"

const Default = ({ children }) => (
  <div className="layout layout-default">
    <div>
      <Header />
      <div
        style={{
          padding: `1em`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link to="/">
            <Logo />
          </Link>
        </h1>
      </div>
      <main
        style={{
          backgroundColor: "#007fff",
          color: "white",
          width: "80%",
          padding: "3em calc(50% - 6em) 3em 3em",
          margin: "5em 0 10em"
        }}
      >
        {children}
      </main>
    </div>
    <Footer />
  </div>
)

Default.propTypes = {
  children: PropTypes.node.isRequired,
  subheadline: PropTypes.string,
}

export default Default
