import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer className="footer">
    <div>© {new Date().getFullYear()} lateflip.com</div>
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
  </footer>
)

export default Footer
