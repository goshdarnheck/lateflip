import React from "react"
import { dateFromUrl } from "../../../lib/utils"
import { SEO } from "../../../components/common"
import Layout, { fonts } from "../../../layouts/archive"
import styled from "styled-components"

export const frontmatter = {
  url: "/2019/02/02",
  subheadline: "ooookay",
}

const date = dateFromUrl(frontmatter.url)

const CustomPage = styled.div`
  .layout-cube {
    --text: red;
  }
`

const Page = () => (
  <CustomPage>
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
  </CustomPage>
)

export default Page
