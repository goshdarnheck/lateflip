import React from "react"
import { dateFromUrl } from "../../../lib/utils"
import { SEO } from "../../../components/common"
import Layout, { fonts } from "../../../layouts/first"

export const frontmatter = {
  url: "/2020/01/30",
  subheadline: "graphic design is my passion"
}

const date = dateFromUrl(frontmatter.url)

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
