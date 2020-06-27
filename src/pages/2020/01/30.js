import React from "react"
import { DateTime } from "luxon"
// import { Link } from "gatsby"

import Layout, { fonts } from "../../../layouts/jazzy/jazzy"
import SEO from "../../../components/seo"

const date = DateTime.fromISO("2020-01-30")

const Page = () => (
  <Layout subheadline="my passion is graphic design" date={date}>
    <SEO fonts={fonts} title={date} canonicalUrl={date} />
    <ul className="grid">
      <li><h2>TEST</h2></li>
      <li><h3>testing</h3></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </Layout>
)

export default Page
