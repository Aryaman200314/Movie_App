import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    
    <div className='navbar'>
        <h2>Aryaman Movie</h2>
        <ul className='navbar-links'>
            <li>
                <Link to='/'>Home</Link>
            </li>

            <li>
                <Link to='Movie'>Movie</Link>
            </li>

            <li>
                <Link to='TV'>TV Shows</Link>
            </li>

            <li>
                <Link to='Favmovies'>My movies </Link>
            </li>

            <li>
                <Link to='Favtv'>My TV Shows</Link>
            </li>
            
        </ul>
        
    </div>
    <div className='search-btn'>
        <input type='text' placeholder='Search for movie'></input>
        <button>Submit</button>
    </div>

    </>
    
  )
}
