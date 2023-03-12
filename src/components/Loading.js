import React from 'react'
import './css/loading-screen.css';
import { useRef } from 'react';

export default function Loading({ screen }) {
  
  
  setTimeout(() => {
    screen.current.style = 'display: none;';
  }, 3000)


  return (
    <div className='loading-screen' ref={screen}>

      <div className="center-image">
        <img src="loading-img.png" alt="not found" className='insta-img' />
      </div>

      <div className="fromm-meta">
        <div className="from">from</div>
        <div className="meta-img"><img src="meta.png" alt="meta.png not found" className='meta' /></div>
      </div>
    </div>
  )

}
