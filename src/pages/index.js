import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import NewSuggestion from '../components/new-suggestion'
import Suggestions from '../components/suggestions'

const handleSubmitNewSuggestion = (e) => {
  e.preventDefault()
  console.log("Submit Clicked")
  console.log(e.target.suggestion.value)
  console.log(e.target.email.value)
  console.log(process.env.AWS_REGION)
  console.log(process.env.AWS_ACCESS_KEY_ID)
  console.log(process.env.AWS_SECRET_ACCESS_KEY)
}
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <NewSuggestion handleSubmitNewSuggestion={handleSubmitNewSuggestion} />
    <Suggestions />

  </Layout>
)

export default IndexPage
