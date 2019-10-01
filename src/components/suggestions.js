import React from 'react'
import SuggestionCard from './suggestion-card'

import { useStaticQuery, graphql } from "gatsby"


const Suggestions = () => {
  const data = useStaticQuery(graphql`
    query {
      allSuggestionsCsv {
        nodes {
          name
          suggestion
          likers
          email
          id
          num_votes
        }
      }
    }`
  )
  console.table(data.allSuggestionsCsv.nodes)


  return (
    <div>
      {
        data.allSuggestionsCsv.nodes.map((node, index) => {

          // console.log(node.num_votes)
          // return (<p>{node.email}</p> + "john" + node.email + node.suggestion + node.num_votes)
          return (
            <>
              <SuggestionCard node={node} />
            </>
          )
        })
      }
    </div >
  )
}

export default Suggestions
