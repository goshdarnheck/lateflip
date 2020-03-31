import React from "react"
// import { Link } from "gatsby"
import { DateTime } from "luxon"

import Layout, { fonts } from "../../../layouts/jazzy/jazzy"
import SEO from "../../../components/seo"
import Logo from "../../../components/svg/lateflip-logo"

const date = DateTime.fromISO("2020-03-19")

const Page = () => (
  <Layout subheadline="love being inside and online" date={date}>
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
)

export default Page
