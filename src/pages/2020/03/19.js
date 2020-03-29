import React from "react"
// import { Link } from "gatsby"

import Layout, { fonts } from "../../../layouts/jazzy/jazzy"
import SEO from "../../../components/seo"

const Page = () => (
  <Layout subheadline="love being inside and online">
    <SEO fonts={fonts} title="March 19th, 2020" canonicalUrl="/2020/03/19" />
    <ul className="grid">
      <li><h2>Skateboarding!</h2></li>
      <li>with the</li>
      <li>jazzy layout</li>
    </ul>
  </Layout>
)

export default Page
