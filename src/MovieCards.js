//This file will contain all the cards  and their attributes.
//The data insode the cards will come from the file Movie list 
// transfred in the form of props
//this file is the child of MivoeList

// we will drectally fetch the data from app.js so that if i want to use that data somewhere else i can use it.
import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { json } from 'react-router-dom';
export default function MovieCards({ movie }) {
  //state to handle the heart icon to save the movies
  const  [isLiked, setIsLiked] = useState(false);
  const handleHeart=()=>{
    setIsLiked((prev)=>!prev)
  }
  const { id, poster_path, title, vote_count, vote_average, release_date } = movie;
  const [favMovies, setfavMovies] = useState(
    JSON.parse(
      localStorage.getItem('favoriteMvoies'))?.some(([_,movieId])=>movieId === id) || false
  )
  useEffect(()=>
  {
    const favMovies = JSON.parse(localStorage.getItem('favoriteMvoies')) || []
    if(isLiked){
      localStorage.setItem('favoriteMvoies',JSON.stringify([...favMovies,{id, title}]))
    }
    else
    {
      localStorage.getItem('favoriteMvoies',
      JSON.stringify(favMovies.filter(([title,movieId])=>movieId !== id ))
      )
    }
  },[isLiked,title,id])
  return (
    <div className='card'>
      <li>
        <h2>{title}</h2>

        <img src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt='No image available' />
        <section>
          <div className='vote'>
            <p>Votes: {vote_count}</p>
            <p>Rating: {vote_average}</p>
          </div>
          <div className='date'>
            <p>R.date: {release_date}</p>
          </div>
          <div className='heart'>
            {isLiked ? (<FaHeart className='heart-active' onClick={handleHeart}/>):(<FaRegHeart className='heart-non-active' onClick={handleHeart}/>)}
            </div>
           
        </section>
      </li>
    </div>
  )
}
