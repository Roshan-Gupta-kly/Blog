import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='not-found'>
      <p>That page cannot be found!!!!</p>
      <Link to='/'><button>Back</button></Link>
    </div>
  )
}

export default NotFound
