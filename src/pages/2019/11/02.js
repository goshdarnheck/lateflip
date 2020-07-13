import React from "react"
import { dateFromUrl } from "../../../lib/utils"
import { SEO } from "../../../components/common"
import Layout, { fonts } from "../../../layouts/cube"
import { CardVideo } from "../../../components/cards"

export const frontmatter = {
  url: "/2019/11/02",
  subheadline: "kickflips",
  description: "this is the kickflip edition of lateflip",
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
          title={`Jarne Verbruggen's "Professional Life" Part`}
          id="mIkWPoeHlvM"
          details="Video - 12m"
          extras={[
            <a href="https://www.thrashermagazine.com/">Thrasher</a>,
            <a href="https://www.instagram.com/jarneverbruggen/">
              Jarne Verbruggen
            </a>,
          ]}
          type="youtube"
        />
      </li>
      <li>
        <CardVideo
          title="Wild Ride! with Steve-O - Episode #1 Tony Hawk"
          id="V143LeToeO0"
          type="youtube"
        />
      </li>
      <li>
        <CardVideo
          title="Venture vs Thunder!"
          id="B0Tyk4rj3hs"
          type="youtube"
        />
      </li>
      <li>
        <CardVideo
          title="Venture vs Thunder!"
          id="B0Tyk4rj3hs"
          type="youtube"
        />
      </li>
      <li>
        <CardVideo
          title="Venture vs Thunder!"
          id="B0Tyk4rj3hs"
          type="youtube"
        />
      </li>
      <li>
        <CardVideo
          title="Venture vs Thunder!"
          id="B0Tyk4rj3hs"
          type="youtube"
        />
      </li>
    </ul>
  </Layout>
)

export default Page
