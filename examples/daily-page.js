import React from "react"
import { dateFromUrl } from "../../../lib/utils"

// The SEO component wraps react-helmet
// it accepts these props:
// - fonts - an array of Google font names, exported from all layouts
// - title  - accepts a string or luxon DateTime object
// - canonicalUrl - accepts a string or luxon DateTime object
// - description - meta description
// - lang - page language, defaults to "en"
// - meta - an array of extra meta data objects in the shape of { name: ``, content: `` }
import SEO from "../../../components/seo"

// Import a layout component and it's font list
import Layout, { fonts } from "../../../layouts/jazzy"


// Including these fields will add the "daily page" to the archive
export const frontmatter = {
  url: "/2019/01/02",
  subheadline: "this is a new old test",
}

const date = dateFromUrl(frontmatter.url)

const Page = () => (
  <Layout subheadline={frontmatter.subheadline} date={date}>
    <SEO fonts={fonts} title={date} canonicalUrl={date} />
    {/*
      Layouts follow a convention of styling a `.grid` element,
      although a page does not have to implement one
      */}
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
