import React from "react"
import { dateFromUrl } from "../../../lib/utils"
import SEO from "../../../components/seo"
import Layout, { fonts } from "../../../layouts/cube"
import { CardVideo } from "../../../components/cards"

export const frontmatter = {
  url: "/2019/11/02",
  subheadline: "kickflips",
  description: "this is the kickflip edition of lateflip",
}

const date = dateFromUrl(frontmatter.url)
// ᠅⁂ ‡ †
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
          youtubeId="mIkWPoeHlvM"
          length="12min"
          extras={[
            <a href="https://www.thrashermagazine.com/">Thrasher</a>,
            <a href="https://www.instagram.com/jarneverbruggen/">
              Jarne Verbruggen
            </a>,
          ]}
        />
      </li>
      <li>
        <CardVideo
          title="Wild Ride! with Steve-O - Episode #1 Tony Hawk"
          youtubeId="V143LeToeO0"
          length="52min"
        />
      </li>
      <li>
        <CardVideo
          title="Venture vs Thunder!"
          youtubeId="B0Tyk4rj3hs"
          length="16min"
        />
      </li>
      <li>
        <CardVideo
          title="Venture vs Thunder!"
          youtubeId="B0Tyk4rj3hs"
          length="16min"
        />
      </li>
      <li>
        <CardVideo
          title="Venture vs Thunder!"
          youtubeId="B0Tyk4rj3hs"
          length="16min"
        />
      </li>
      <li>
        <CardVideo
          title="Venture vs Thunder!"
          youtubeId="B0Tyk4rj3hs"
          length="16min"
        />
      </li>
    </ul>
  </Layout>
)

export default Page
