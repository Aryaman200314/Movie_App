import React, { useEffect, useState } from 'react'
import Movieslist from './Movieslist'

export default function Favmovies({movies}){
  const [fav,setFav] = useState([])
  const favoriteMoviesIds = JSON.parse(localStorage.getItem("favoriteMovies")) || []

  const fetchmovies = async() => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      const result = await response.json
      return result.results
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchmovies().then(mainMovieList => {
      const favoriteMovies = mainMovieList.filter(movie => 
        favoriteMoviesIds.some(([_,movieId])=>movieId === movie.id)
      )
      setFav(favoriteMovies)
    })
  }, [favoriteMoviesIds])

  return (
    <div>
      <h2 className="text-center"></h2>
      {favoriteMoviesIds.length > 0 ? (
        <Movieslist movies={fav}/>
      ) : (
        <>
          <h1>No favorite movies!</h1>
        </>
      )}
    </div>
  )
}