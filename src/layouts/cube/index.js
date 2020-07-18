import React, { useState } from "react"
import PropTypes from "prop-types"
import { DateTime } from "luxon"

import { Footer, HomeLink, Top } from "../../components/common"
import "./cube.scss"

export const fonts = ["Montserrat", "Poiret One"]

const Cube = ({ children, subheadline, date }) => {
  const cubeFriends = {
    0: [4, 2, 5, 3],
    1: [4, 3, 5, 2],
    2: [4, 1, 5, 0],
    3: [4, 0, 5, 1],
    4: [5, 2, 0, 3],
    5: [0, 2, 1, 3]
  }
  const [side, setSide] = useState(0)
  const sideChanger = (click) => setSide(cubeFriends[side][click]);

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
              <button aria-label="Rotate to top face" onClick={() => sideChanger(0)}></button>
            </li>
            <li>
              <button aria-label="Rotate to right face" onClick={() => sideChanger(1)}></button>
            </li>
            <li>
              <button aria-label="Rotate to bottom face" onClick={() => sideChanger(2)}></button>
            </li>
            <li>
              <button aria-label="Rotate to left face" onClick={() => sideChanger(3)}></button>
            </li>
            <li></li>
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
