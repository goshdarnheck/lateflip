import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layouts/default/default"
import SEO from "../components/seo"

const ArchivePage = () => (
  <Layout archive={true}>
    <SEO title="archives" />
    <h1 style={{ marginTop: "0" }}>Hi from the archives page</h1>
    <p>Welcome to the archives</p>
    <ol>
      <li>
        <Link to="/2020/01/30/">2020-01-30</Link>
      </li>
    </ol>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ArchivePage
