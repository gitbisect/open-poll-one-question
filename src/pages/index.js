import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import NewSuggestion from '../components/new-suggestion'

const handleSubmitNewSuggestion = () => {
  console.log("Submit Clicked")
}
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Please give your suggestions or vote</h1>
    <p>What topics would you like to hear about at the NEXT talk?</p>

    <NewSuggestion props={handleSubmitNewSuggestion} />
  </Layout>
)

export default IndexPage
