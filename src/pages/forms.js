import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Inputs from "../components/forms/inputs"

const IndexPage = () => (
  <Layout>
    <SEO title="Forms" />
    <Inputs />
  </Layout>
)

export default IndexPage
