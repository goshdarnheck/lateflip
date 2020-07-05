import React from "react"
import styled from "styled-components"
import { dateFromUrl } from "../../../lib/utils"
import SEO from "../../../components/seo"
import Layout, { fonts } from "../../../layouts/jazzy"
import Logo from "../../../components/svg/lateflip-logo"

export const frontmatter = {
  url: "/2020/03/18",
  subheadline: "testing computer software",
}

const date = dateFromUrl(frontmatter.url)

const CustomPage = styled.div`
  .layout-jazzy {
    --background: red;
  }

  article {
    ul {
      list-style: none;
      background-color: var(--secondary);
      border: 1em solid var(--text);
      margin: 1em;
      padding: 0;
    }

    li {
      background-color: var(--text);
      margin: 1em;
      padding: 1em;
    }
  }
`

const Page = () => (
  <CustomPage>
    <Layout subheadline={frontmatter.subheadline} date={date}>
      <SEO fonts={fonts} title={date} canonicalUrl={date} />
      <ul>
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
          <Logo />
        </li>
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
      </ul>
    </Layout>
  </CustomPage>
)

export default Page
