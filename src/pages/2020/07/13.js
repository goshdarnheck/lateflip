import React from "react"
import { dateFromUrl } from "../../../lib/utils"
import { HomeLink, SEO } from "../../../components/common"
import Layout, { fonts } from "../../../layouts/mattdrian"
import { CardVideo } from "../../../components/cards"
import Icon from "../../../components/svg/lateflip-icon"
import { DateTime } from "luxon"

export const frontmatter = {
  url: "/2020/07/13",
  subheadline: "have a good day",
  description: "Hey look at this skateboard related stuff",
}

const date = dateFromUrl(frontmatter.url)

const header = (
  <header>
    <div>
      <HomeLink title="To the lateflip.com home page">
        <Icon />
      </HomeLink>
    </div>
    <div>
      <h1>{frontmatter.subheadline}</h1>
      <h2>{date.toLocaleString(DateTime.DATE_FULL)}</h2>
    </div>
  </header>
)

const Page = () => (
  <Layout subheadline={frontmatter.subheadline} date={date}>
    <SEO
      fonts={fonts}
      title={date}
      canonicalUrl={date}
      description={frontmatter.description}
    />
    <ul className="grid">
      <li>{header}</li>
      <li>test</li>
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
    </ul>
  </Layout>
)

export default Page
