import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Header from "../../components/header"
import Footer from "../../components/footer"
import Logo from "../../components/svg/lateflip-logo"

import "./default.css"

export const fonts = ["Montserrat"];

const Default = ({ children }) => (
  <div className="layout layout-default">
    <main>
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
      <article
        style={{
          backgroundColor: "#007fff",
          color: "white",
          width: "80%",
          padding: "3em calc(50% - 6em) 3em 3em",
          margin: "5em 0 10em"
        }}
      >
        {children}
      </article>
    </main>
    <Footer />
  </div>
)

Default.propTypes = {
  children: PropTypes.node.isRequired
}

export default Default
