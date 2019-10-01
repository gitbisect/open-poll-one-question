import React from 'react'
import './suggestion-card.css'
import { FaThumbsUp } from 'react-icons/fa'
import ClickableLiker from './clickable-liker'
import Fab from '@material-ui/core/Fab';
import { updateLike } from '../components/dynamo-open-poll'
import { randomName } from './utility.js'


const SuggestionCard = ({ node, index, onLikeClick }) => {
  const handleLike = (node) => {
    // Thank you: https://stackoverflow.com/a/44325321/683178

    const cookieName = randomName()
    onLikeClick(index, cookieName)

    // update num votes without regard to conflicting transactions, just to make sure it works at all.
    updateLike({
      suggestion: node.suggestion.S,
      liker: cookieName,
    })
    // now that the incremented value is saved, refresh it on the screen
  }

  return (

    <div className="grid-container">
      <div className="suggestion">{node.suggestion.S}</div>
      <div className="like-area">
        <Fab onClick={() => handleLike(node)} type="submit" color="primary" aria-label="like">
          <FaThumbsUp className="like" />
        </Fab>
      </div>
      <div className="proposer">Proposed by: <b>{node.proposer.S}</b></div>
      <div className="num_votes">Votes: {node.num_votes.N}</div>
      {node.likers.L.length > 0 &&
        <div className="likers">
          Others who liked this topic:<br />
          <label>
            {
              node.likers.L.map((liker, index) => {
                return (<b key={index}><ClickableLiker liker={liker.S} /></b>)
              })
            }
          </label>
        </div>

      }
    </div>
  )
}

export default SuggestionCard


