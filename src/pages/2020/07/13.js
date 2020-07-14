import React from "react"
import { dateFromUrl } from "../../../lib/utils"
import { SEO } from "../../../components/common"
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
    {(header) => (
      <>
        <SEO
          fonts={fonts}
          title={date}
          canonicalUrl={date}
          description={frontmatter.description}
        />
        <ul className="grid">
          <li>{header}</li>
          <li></li>
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
      </>
    )}
  </Layout>
)

export default Page
