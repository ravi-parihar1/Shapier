import React from 'react'

export default function Phase2OverLayImages({ src, alt, title }) {
  return (
    <div className="overlay-image-container">
      <div className="overlay-image" style={{ backgroundImage: `url(${src})` }}>
        <h3 className="overlay-title">{title}</h3>
        <button className="overlay-button">Book</button>
      </div>
    </div>
  )
}
