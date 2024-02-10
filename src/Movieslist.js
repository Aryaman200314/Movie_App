import React, { useState } from 'react';
import MovieCards from './MovieCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Movieslist({ movies }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='hamburger-menu' onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>

      {menuOpen ? (
        <div className="menu">
          <button className='buttons1'>Rating Ascending</button>
          <button className='buttons'>Rating Descending</button>
          <button className='buttons'>Votes Ascending</button>
          <button className='buttons'>Votes Descending</button>
          <button className='buttons'>Latest Release</button>
          <button className='buttons'>Old</button>
        </div>
      ) : null}

      <div>
        <ul className='movies-list'>
          {movies.map((movie) => (
            <MovieCards key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </>
  );
}
