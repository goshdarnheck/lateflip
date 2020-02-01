import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layouts/first/first"
import SEO from "../../../components/seo"

const Page = () => (
  <Layout>
    <SEO title="January 30th, 2020" />
    <h1>This is an old page</h1>
    <p>Welcome to the old page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Page
