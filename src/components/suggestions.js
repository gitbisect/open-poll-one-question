import React, { useEffect, useState } from 'react'
import SuggestionCard from './suggestion-card'

import { listAllItems } from '../components/dynamo-open-poll'

const Suggestions = () => {


  const [allItems, setAllItems] = useState([])
  const getAllItems = async () => {
    let x = await listAllItems()
    setAllItems(x.Items)
  }

  const incrementLike = (index, cookieName) => {
    const newItems = [...allItems]
    newItems[index].num_votes.N++
    newItems[index].likers.L.push({ S: cookieName })
    setAllItems(newItems)
  }
  useEffect(() => {
    getAllItems()
  }, [])

  return (
    <div>
      {
        allItems.map((node, index) => {
          return (
            <SuggestionCard node={node} onLikeClick={incrementLike} key={node.suggestion.S + node.proposer.S} index={index} />
          )
        })
      }
    </div >
  )
}

export default Suggestions



