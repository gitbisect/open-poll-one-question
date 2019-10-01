import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import NewSuggestion from '../components/new-suggestion'
import Suggestions from '../components/suggestions'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NewSuggestion />
    <Suggestions />
  </Layout>
)

export default IndexPage
