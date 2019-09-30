import React from 'react'

const newSuggestion = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmitNewSuggestion}>
        <div>
          <label htmlFor="suggestion">Your topic suggestion</label>
        </div>
        <div>
          <textarea name="suggestion" id="suggestion" cols="60" rows="10" defaultValue="Your suggestion here please"></textarea>
        </div>
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input type="email" id="email" />
        </div>
        <div>
          <button type="submit">Thats what I want </button>
        </div>
      </form>
    </div>
  )
}

export default newSuggestion; 
