import React from "react"
import styled from "styled-components"
import { dateFromUrl } from "../../../lib/utils"
import { SEO } from "../../../components/common"
import Layout, { fonts } from "../../../layouts/mattdrian"
import { CardVideo } from "../../../components/cards"

export const frontmatter = {
  url: "/2020/07/14",
  subheadline: "It's Saturday!",
  description: "wow a description",
}

const date = dateFromUrl(frontmatter.url)

const CustomPage = styled.div`
  .layout-mattdrian {
    --primary: rgb(186, 143, 192);
    --secondary: rgb(194, 234, 240);
    --accent: rgb(126, 192, 159);
  }
`

const Page = () => (
  <CustomPage>
    <Layout subheadline={frontmatter.subheadline} date={date}>
      {header => (
        <>
          <SEO
            fonts={fonts}
            title={date}
            canonicalUrl={date}
            description={frontmatter.description}
          />
          <ul className="grid">
            <li></li>
            <li></li>
            <li>{header}</li>
            <li></li>
            <li>
              <CardVideo
                title={`BEAGLE Tapes: Episode 37 - Bryan Herman and Andrew Reynolds`}
                id="RfA6ROrQIU4"
                type="youtube"
                thumbnailQuality="maxresdefault"
                details="Video - 17m"
                extras={[
                  <a href="https://www.youtube.com/channel/UC8X6lWtSILREl2qV96fohTA">
                    HIJINX Net
                  </a>,
                  <a href="https://www.instagram.com/beagleoneism/">
                    beagleoneism
                  </a>,
                ]}
              />
            </li>
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
            <li></li>
          </ul>
        </>
      )}
    </Layout>
  </CustomPage>
)

export default Page
