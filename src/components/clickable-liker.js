import React from 'react'
import './clickable-liker.css'

const ClickableLiker = ({ liker }) => {
  return (
    <>
      <label className="tag-like-label">{liker}</label>
    </>
  )
}

export default ClickableLiker

