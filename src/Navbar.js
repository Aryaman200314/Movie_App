import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default function Navbar({onSearch}) {
    const [search, setSearch] = useState('');
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
        <input type='text' placeholder='Search for movie' onChange={(e)=>setSearch(e.target.value)}></input>
        <button onClick ={()=>onSearch(search)}><FontAwesomeIcon icon={faSearch}/></button>
        
    </div>

    </>
    
  )
}
