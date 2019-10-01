import React from 'react'
import './new-suggestion.css'
import Button from '@material-ui/core/Button';

const newSuggestion = (props) => {
  return (
    <div className='suggestion-container'>
      <div className="the-reason">
        For the 2020 AWS Community Day, we want to tailor the talks to
        the topics the audience really wants to hear about. So we want your
        suggestions on what the talks should be about.
        <p></p>
        What topics would you like to hear about at the AWS Community Day talks?
      </div>

      <form className="suggestion-form" onSubmit={props.handleSubmitNewSuggestion}>
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
          <label htmlFor="user-full-name">Your name please</label>
        </div>
        <div>
          <input type="text" id="user-full-name" placeholder="Your name" required
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