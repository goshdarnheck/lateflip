import React from "react"
import { dateFromUrl } from "../../../lib/utils"
import SEO from "../../../components/seo"
import Layout, { fonts } from "../../../layouts/cornflakes"

export const frontmatter = {
  url: "/2020/03/31",
  subheadline: "launch ramps!",
}

const date = dateFromUrl(frontmatter.url)

const Page = () => (
  <Layout subheadline={frontmatter.subheadline} date={date}>
    <SEO fonts={fonts} title={date} canonicalUrl={date} />
    <ul className="grid">
      <li>
        <h2>
          <a href="https://www.youtube.com/watch?v=V143LeToeO0">
            Wild Ride! with Steve-O - Episode #1 Tony Hawk
          </a>
        </h2>
        <div className="image">
          <a href="https://www.youtube.com/watch?v=V143LeToeO0">
            <img
              alt=""
              src="http://i3.ytimg.com/vi/V143LeToeO0/maxresdefault.jpg"
            />
          </a>
        </div>
        <div className="details">Video - 52:02</div>
      </li>
    </ul>
  </Layout>
)

export default Page
