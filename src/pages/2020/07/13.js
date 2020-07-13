import React from "react"
import { dateFromUrl } from "../../../lib/utils"
import SEO from "../../../components/seo"
import Layout, { fonts } from "../../../layouts/mattdrian"
import { CardVideo } from "../../../components/cards"

export const frontmatter = {
  url: "/2020/07/13",
  subheadline: "have a good day",
  description: "Hey look at this skateboard related stuff",
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
          title={`Venture vs Thunder!`}
          id="B0Tyk4rj3hs"
          type="youtube"
          thumbnailQuality="maxresdefault"
          details="Video - 13m"
          extras={[
            <a href="https://www.youtube.com/channel/UCP94Q0ypuPdhl-NupoAbcoQ">
              Ben Degros
            </a>,
          ]}
        />
      </li>
      <li>hi</li>
      <li>hey</li>
      <li>content</li>
      <li>wow</li>
      <li>thanks</li>
    </ul>
  </Layout>
)

export default Page
