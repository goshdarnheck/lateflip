import React from "react"
import { dateFromUrl } from "../../../lib/utils"
import { SEO } from "../../../components/common"
import Layout, { fonts } from "../../../layouts/cube"
import { CardVideo } from "../../../components/cards"

export const frontmatter = {
  url: "/2020/07/10",
  subheadline: "Watch This",
  description:
    "These are the skateboarding videos that you must watch today. This is the skateboarding website to watch.",
}

const date = dateFromUrl(frontmatter.url)

const Page = () => (
  <Layout subheadline={frontmatter.subheadline} date={date}>
    <SEO
      fonts={fonts}
      title={date}
      canonicalUrl={date}
      description={frontmatter.description}
    />
    <ul className="grid">
      <li>
        <CardVideo
          title={`Classics: Mark Gonzales in Video Days`}
          id="gizM-PuVnY0"
          type="youtube"
          thumbnailQuality="hqdefault"
          details="Video - 6m"
          extras={[<a href="https://www.thrashermagazine.com/">Thrasher</a>]}
        />
      </li>
      <li>a</li>
      <li>b</li>
      <li>c</li>
      <li>d</li>
      <li>e</li>
    </ul>
  </Layout>
)

export default Page
