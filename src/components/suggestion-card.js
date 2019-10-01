import React from 'react'
import './suggestion-card.css'
import { FaThumbsUp } from 'react-icons/fa'
import ClickableLiker from './clickable-liker'
import Fab from '@material-ui/core/Fab';

const SuggestionCard = ({ node }) => {
  return (
    <div className="grid-container">
      <div className="suggestion">{node.suggestion}</div>
      <div className="like-area">
        <Fab color="primary" aria-label="like">
          <FaThumbsUp className="like" />
        </Fab>
      </div>
      <div className="proposer">Proposed by: <b>{node.name}</b></div>
      <div className="num_votes">Votes: {node.num_votes}</div>
      <div className="likers">
        Others who liked this topic:<br />
        <label>
          {
            node.likers.split(',').map((liker, index) => {
              return (<b><ClickableLiker liker={liker} /></b>)
            })
          }
        </label>
      </div>
    </div>
  )
}

export default SuggestionCard


