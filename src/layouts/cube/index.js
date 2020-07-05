import React, { useState } from "react"
import PropTypes from "prop-types"
import { DateTime } from "luxon"
import { Link } from "gatsby"

import Top from "../../components/top"
import Footer from "../../components/footer"
import "./cube.scss"

export const fonts = ["Montserrat", "Poiret One"]

const Cube = ({ children, subheadline, date }) => {
  const [side, setSide] = useState(0)

  return (
    <div className="layout layout-cube">
      <Top />
      <main>
        <header>
          <div>
            <Link to="/" title="Home">
              Flipping the Cube
            </Link>
          </div>
          <div>
            <h1>{subheadline}</h1>
            <span>‡</span>
            <h2>{date.toLocaleString(DateTime.DATE_FULL)}</h2>
          </div>
        </header>
        <article className={`side-${side}`}>
          <div className="cube">{children}</div>
          <ul className="cube-controls">
            <li>
              <button onClick={() => setSide(0)}>∺</button>
            </li>
            <li>
              <button onClick={() => setSide(1)}>∾</button>
            </li>
            <li>
              <button onClick={() => setSide(2)}>≏</button>
            </li>
            <li>
              <button onClick={() => setSide(3)}>≒</button>
            </li>
            <li>
              <button onClick={() => setSide(4)}>≋</button>
            </li>
            <li>
              <button onClick={() => setSide(5)}>≄</button>
            </li>
          </ul>
        </article>
      </main>
      <Footer />
    </div>
  )
}

Cube.propTypes = {
  children: PropTypes.node.isRequired,
  subheadline: PropTypes.string,
}

export default Cube
