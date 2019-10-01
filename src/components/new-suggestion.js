import React from 'react'
import './new-suggestion.css'
import Button from '@material-ui/core/Button';
import { putItem } from '../components/dynamo-open-poll'

const handleSubmitNewSuggestion = (e) => {
  e.preventDefault()
  const newItem = {
    suggestion: e.target.suggestion.value,
    proposer: e.target.user_full_name.value,
    proposer_email: e.target.email.value,
    num_votes: 1,
    likers: [],
  }
  console.table(newItem)

  putItem(newItem)
}


const newSuggestion = () => {
  return (
    <div className='suggestion-container'>
      <div className="the-reason">
        For the 2020 AWS Community Day, we want to tailor the talks to
        the topics the audience really wants to hear about. So we want your
        suggestions on what the talks should be about.
        <p></p>
        What topics would you like to hear about at the AWS Community Day talks?
      </div>

      <form className="suggestion-form" onSubmit={handleSubmitNewSuggestion}>
        <div className="suggestion-box-label" >
          <label htmlFor="suggestion">Your topic suggestion</label>
        </div>
        <div>
          <textarea name="suggestion" id="suggestion"
            rows="5" className="suggestion"
            placeholder="Your suggestion here please" required></textarea>
        </div>
        <div className="suggestion-box-label" >
          <label htmlFor="email">Email (this will not be visible to others)</label>
        </div>
        <div>
          <input type="email" id="email" placeholder="Your email" required
            className="suggester-email" />
        </div>
        <div className="suggestion-box-label" >
          <label htmlFor="user_full_name">Your name please</label>
        </div>
        <div>
          <input type="text" id="user_full_name" placeholder="Your name" required
            className="suggester-name" />
        </div>
        <p></p>
        <div>
          <Button variant="contained" size="large"
            color="primary" className="" type="submit">
            Please add this to the list
          </Button>
        </div>
      </form>


    </div>
  )
}

export default newSuggestion;