import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer className="footer">
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about/">about</Link>
        </li>
        <li>
          <Link to="/archive/">archive</Link>
        </li>
      </ul>
    </nav>
    <small>© {new Date().getFullYear()} lateflip.com</small>
  </footer>
)

export default Footer
