import React from "react"
import Layout from "../components/layouts/first/first"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout homepage={true} subheadline="90% Authentic">
    <SEO title="Home" />
    <div
      style={{
        backgroundColor: "#007fff",
        color: "#fff",
        gridColumn: "span 3",
        gridRow: "span 3",
        padding: "1em",
        transform: "rotate(45deg)"
      }}
    >
      <h1 style={{ transform: "rotate(-45deg)", margin: 0, letterSpacing: "0.2em", lineHeight: "2" }}>
        it's <em>the</em> skateboard website
      </h1>
    </div>
    <div style={{ gridColumn: "span 2" }}>
      <p>Welcome to the new skateboard site.</p>
    </div>
    <div style={{ gridColumn: "span 3" }}>
      <p>There's nothing more to say</p>
    </div>
    <div
      style={{
        backgroundColor: "#fc0",
        gridColumn: "span 3",
        gridRow: "span 3",
      }}
    >
      <p>
        <a href="https://www.youtube.com/watch?v=OeWp3VJn7tE">
          <img
            alt="thumbnail for youtube video"
            src="https://i.ytimg.com/vi/OeWp3VJn7tE/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLB85oZBczikBMqibckdDvO2iTkF0A"
          />
        </a>
      </p>
      <p>Look it's a skateboard truck review!</p>
    </div>
    <div style={{ backgroundColor: "#0ff", gridColumn: "span 3" }}>
      <p>This could be something</p>
    </div>
    <div style={{ gridColumn: "span 3" }}>
      <p>AD AD AD</p>
    </div>
    <div style={{ backgroundColor: "#e900ff", gridColumn: "span 2" }}>
      <p>Okay</p>
    </div>
  </Layout>
)

export default IndexPage
