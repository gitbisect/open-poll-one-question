import React from 'react'
import './suggestion-card.css'
import { FaThumbsUp } from 'react-icons/fa'

const SuggestionCard = ({ node }) => {

  return (
    <div className="card-container">
      <h3>{node.name}</h3>
      <div className="card-bottom">
        <div className="suggestion-in-card">
          {node.suggestion}
        </div>
        <div className="like-area">
          <div className="like-button">
            <FaThumbsUp className="thumbs-up-icon-in-card" />
          </div>
          <div className="vote-count">{node.num_votes}</div>
        </div>
      </div>
    </div >
  )
}

export default SuggestionCard
