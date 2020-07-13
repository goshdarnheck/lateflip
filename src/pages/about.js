import React from "react"

import Layout from "../layouts/default"
import { SEO } from "../components/common"

const AboutPage = () => (
  <Layout>
    <SEO title="About" description="About Lateflip.com" />
    <h1>About</h1>
    <p>
      Hey this is a website about skateboarding that someone made and they keep
      updating it almost everyday with links to skateboarding stuff. Questions?
      Comments? I'm on <a href="https://twitter.com/goshdarnheck">Twitter</a> ❤️🛹
    </p>
  </Layout>
)

export default AboutPage
