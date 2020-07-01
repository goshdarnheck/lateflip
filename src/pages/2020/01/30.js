import React from "react"
import { DateTime } from "luxon"
// import { Link } from "gatsby"

import Layout, { fonts } from "../../../layouts/first"
import SEO from "../../../components/seo"

export const frontmatter = {
  url: "/2020/01/30",
  day: "2020-01-30",
  subheadline: "graphic design is my passion"
}

const date = DateTime.fromISO(frontmatter.day)

const Page = () => (
  <Layout subheadline={frontmatter.subheadline} date={date}>
    <SEO fonts={fonts} title={date} canonicalUrl={date} />
    <ul className="grid">
      <li>
        <h2>TEST</h2>
      </li>
      <li>
        <h3>testing</h3>
      </li>
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
