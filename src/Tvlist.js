import React, { useState } from 'react';
import TvCard from './Tvcard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Tvlist({ series }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sort,setSort] = useState('ascending');
  const sortedSeries = series.sort((a,b)=>
  {
    if(sort === "ascending")
     {
      return a.vote_average - b.vote_average;
    }
    else if(sort === "descending")
    {
      return b.vote_average - a.vote_average;
    }
    else if(sort === "mostLiked")
    {
      return a.vote_count - b.vote_count;
    }
    else if(sort === "leastLiked")
    {
      return b.vote_count - a.vote_count;
    }
    else if(sort === 'latestR')
    {
      return series.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    }
    else if(sort === 'earlyR')
    {
      return series.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    }
  })

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //////////////


  
  return (
    <>
      <div className='hamburger-menu' onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>

      {menuOpen ? (
        <div className="movie-button-sorting-menu">
          <button onClick={()=>setSort("ascending")} className='buttons1'>Most  Popular</button>
          <button onClick={()=>setSort("descending")}className='buttons'>Least  Popular</button>
          <button onClick={()=>setSort("mostLiked")} className='buttons'>Most Rated</button>
          <button onClick={()=>setSort("leastLiked")} className='buttons'>Least Rated</button>
          <button onClick={()=>setSort("latestR")}className='buttons'>Latest Release</button>
          <button onClick={()=>setSort("earlyR")} className='buttons'>Earliest release</button>
        </div>
      ) : null}

      <div>
     
        <ul className='movies-list'>
          {series?.length > 0 ?
          (sortedSeries.map((tv) => (
            <TvCard key={tv.id} series={tv} />
          ))) : (<div className='not-found'>
           
            <h3>No series found!</h3>
           
          </div>)
        }
        </ul>
      </div>
    </>
  );
}
