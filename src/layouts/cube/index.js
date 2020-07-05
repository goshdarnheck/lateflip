import React from "react"
import PropTypes from "prop-types"
import { DateTime } from "luxon"
import { Link } from "gatsby"

import Top from "../../components/top"
import Footer from "../../components/footer"
import "./cube.scss"

export const fonts = ["Montserrat", "Poiret One"]

const Cube = ({ children, subheadline, date }) => (
  <div className="layout layout-cube">
    <Top />
    <main>
      <header>
        <div>
          <Link to="/" title="Take me home">
            The Lateflip Cube
          </Link>
        </div>
        <div>
          <h1>{subheadline}</h1>
          <h2>{date.toLocaleString(DateTime.DATE_FULL)}</h2>
        </div>
      </header>
      <article>
        <div class="scene">{children}</div>
      </article>
    </main>
    <Footer />
  </div>
)

Cube.propTypes = {
  children: PropTypes.node.isRequired,
  subheadline: PropTypes.string,
}

export default Cube
