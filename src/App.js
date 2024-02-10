import React, { useEffect, useState } from 'react'
import Movieslist from './Movieslist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
export default function App() {
  const [movies, setMovies] = useState([]);
  const [totalPages, settotalPages] = useState(0)
  const [currentPage, setcurrentPage] = useState(1)
  const fetchmovies = async(currentPage)=>
  {
    try{
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=849c597089ebb7cdc0c2f60256c93c36&language=en-US&page=${currentPage}`)
      const result = await response.json()
      setMovies(result.results)
      settotalPages(result.total_pages)
    }
    catch (error)
    {
     console.log('Error in fetching:',error)


    }
  }

  const handleSearch = async(query)=>
  {
    try{
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=f531333d637d0c44abc85b3e74db2186&include_adult=false&language=en-US&page=1`)
      const result = await response.json()
      setMovies(result.results)
    }
    catch (error)
    {
      console.log(error)
    }
  }

 useEffect(()=>
 {
  fetchmovies(currentPage)
 },[currentPage])
  return (
    <div>
    
  
     
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<div><Movieslist movies={movies} /></div>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}