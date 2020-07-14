import React, { useState } from "react"
import PropTypes from "prop-types"
import { DateTime } from "luxon"

import { Footer, HomeLink, Top } from "../../components/common"
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
            <HomeLink>
              Flipping the Cube
            </HomeLink>
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
              <button aria-label="Rotate to side one" onClick={() => setSide(0)}></button>
            </li>
            <li>
              <button aria-label="Rotate to side two" onClick={() => setSide(1)}></button>
            </li>
            <li>
              <button aria-label="Rotate to side three" onClick={() => setSide(2)}></button>
            </li>
            <li>
              <button aria-label="Rotate to side four" onClick={() => setSide(3)}></button>
            </li>
            <li>
              <button aria-label="Rotate to side five" onClick={() => setSide(4)}></button>
            </li>
            <li>
              <button aria-label="Rotate to side six" onClick={() => setSide(5)}></button>
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
