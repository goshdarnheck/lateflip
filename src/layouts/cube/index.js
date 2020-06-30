import React from "react"
import PropTypes from "prop-types"
import { DateTime } from "luxon"
import { Link } from "gatsby"

import Header from "../../components/header"
import Footer from "../../components/footer"
import Logo from "../../components/svg/lateflip-logo"
import "./cube.scss"

export const fonts = ["Montserrat", "Poiret One"]

const TheCube = () => {
  return (
    <div class="scene">
      <div class="cube">
        <div class="cube__face cube__face--front">front</div>
        <div class="cube__face cube__face--back">back</div>
        <div class="cube__face cube__face--right">right</div>
        <div class="cube__face cube__face--left">left</div>
        <div class="cube__face cube__face--top">top</div>
        <div class="cube__face cube__face--bottom">bottom</div>
      </div>
    </div>
  )
}

const Cube = ({ children, subheadline, date }) => (
  <div className="layout layout-cubes">
    <Header />
    <main>
      <header>
        <div>
          <Link to="/" title="Take me home">
            <Logo />
          </Link>
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

Cube.propTypes = {
  children: PropTypes.node.isRequired,
  subheadline: PropTypes.string,
}

export default Cubes
