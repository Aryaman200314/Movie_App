
import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { json } from 'react-router-dom';
export default function MovieCards({ series }) {
  const  [isLiked, setIsLiked] = useState(false);
  const handleHeart=()=>{
    setIsLiked((prev)=>!prev)
  }
  const { id, poster_path, name, vote_count, vote_average, first_air_date } = series;
  const [favoriteSeries, setfavoriteSeries] = useState(
    JSON.parse(
      localStorage.getItem('favoriteSeries'))?.some(([_,tvId])=>tvId === id) || false
  )
  useEffect(()=>
  {
    const favMovies = JSON.parse(localStorage.getItem('favoriteSeries')) || []
    if(isLiked){
      localStorage.setItem('favoriteSeries',JSON.stringify([...favoriteSeries,{id, name}]))
    }
    else
    {
      localStorage.getItem('favoriteSeries',
      JSON.stringify(favoriteSeries.filter(([name,tvId])=>tvId !== id ))
      )
    }
  },[isLiked,name,id])
  return (
    <div className='card'>
      <li>
        <h2>{name}</h2>

        <img src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt='No image available' />
        <section>
          <div className='vote'>
            <p>Votes: {vote_count}</p>
            <p>Rating: {vote_average}</p>
          </div>
          <div className='date'>
            <p>R.date: {first_air_date}</p>
          </div>
          <div className='heart'>
            {isLiked ? (<FaHeart className='heart-active' onClick={handleHeart}/>):(<FaRegHeart className='heart-non-active' onClick={handleHeart}/>)}
            </div>
           
        </section>
      </li>
    </div>
  )
}
