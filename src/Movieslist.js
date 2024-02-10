  //This file is the fetch the movie data from the api 
  //this will make an block on our web page in which all the  movie card will be displayed.
  //THis filw will be the parent of Moviecard Component.
  //to transfer data from this file to movie card using props.
  import React from 'react'
  import MovieCards from './MovieCards'
  
  export default function Movieslist({movies}) {
   

    return (
      <div>
        <ul className='movies-list'>
          {movies.map((movie)=>(
            <MovieCards key={movie.id} movie={movie}/>
          ))}
        </ul>
      </div>
    );
  }
