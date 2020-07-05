import React from "react"
import { dateFromUrl } from "../../../lib/utils"
import SEO from "../../../components/seo"
import Layout, { fonts } from "../../../layouts/cube"

export const frontmatter = {
  url: "/2019/11/02",
  subheadline: "this is a new old test"
}

const date = dateFromUrl(frontmatter.url)

const Page = () => (
  <Layout subheadline={frontmatter.subheadline}  date={date}>
    <SEO fonts={fonts} title={date} canonicalUrl={date} />
    <ul className="grid">
      <li>
        <h2>TEST</h2>
      </li>
      <li>
        <h3>testing</h3>
      </li>
    </ul>
  </Layout>
)

export default Page
