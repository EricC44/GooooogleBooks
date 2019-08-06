import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <nav>
      <h1>Google Books Search!</h1>
      <Link to='/'>Search For Books</Link>
      <Link to='/save'>Saved Books</Link>
    </nav>
  )
}

export default Navbar
