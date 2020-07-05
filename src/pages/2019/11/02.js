import React from "react"
import { dateFromUrl } from "../../../lib/utils"
import SEO from "../../../components/seo"
import Layout, { fonts } from "../../../layouts/cube"

export const frontmatter = {
  url: "/2019/11/02",
  subheadline: "this is a new old test",
}

const date = dateFromUrl(frontmatter.url)

const Page = () => (
  <Layout subheadline={frontmatter.subheadline} date={date}>
    <SEO fonts={fonts} title={date} canonicalUrl={date} />
    <ul className="grid">
      <li>
        <h2>
          <a href="https://www.youtube.com/watch?v=mIkWPoeHlvM">
            Jarne Verbruggen's "Professional Life" Part
          </a>
        </h2>
        <div className="image">
          <a href="https://www.youtube.com/watch?v=mIkWPoeHlvM">
            <img
              alt=""
              src="https://i.ytimg.com/vi/mIkWPoeHlvM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCecES2JVgvWA3veOR4Umki5EOe0Q"
            />
          </a>
        </div>
        <div className="details">
          <a href="https://www.thrashermagazine.com/">Thrasher</a> -{" "}
          <a href="https://www.instagram.com/jarneverbruggen/">
            Jarne Verbruggen
          </a>{" "}
          - Video - 12:29
        </div>
      </li>
      <li>
        <h3>testing</h3>
      </li>
      <li>
        <h3>asdf</h3>
      </li>
      <li>
        <h3>2</h3>
      </li>
      <li>
        <h3>3</h3>
      </li>
      <li>
        <h3>4</h3>
      </li>
    </ul>
  </Layout>
)

export default Page
