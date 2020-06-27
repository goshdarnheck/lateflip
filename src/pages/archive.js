import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/default/default"
import SEO from "../components/seo"

const ArchivePage = () => (
  <Layout archive={true}>
    <SEO title="Archive" />
    <h1>Hi from the archive page</h1>
    <p>Welcome to the archive</p>
    <ol>
      <li>
        2020
        <ol>
          <li>
            January
            <ol>
              <li>
                <Link to="/2020/01/30/">2020-01-30</Link>
              </li>
            </ol>
          </li>
          <li>
            March
            <ol>
              <li>
                <Link to="/2020/03/19/">2020-03-19</Link>
              </li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ArchivePage