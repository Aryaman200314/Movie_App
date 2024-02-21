import React, { useEffect, useState } from 'react';
import Movieslist from './Movieslist';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Tvlist from './Tvlist';
import Favmovies from './Favmovies';
import Favtv from './Favtv';
import Navbar from './Navbar';
import Pagination from './Pagination';
export default function App() {
    const [movies, setMovies] = useState([]);
    const [totalPages, settotalPages] = useState(0)
    const [totaltvPages, settotaltvPages] = useState(0)
    const [currentPage, setcurrentPage] = useState(1)
    const [currenttvPage, setcurrenttvPage] = useState(1)
    const [series, setSeries] = useState([]);
    const fetchmovies = async (currentPage) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page`)

            const result = await response.json()
            setMovies(result.results)
            settotalPages(result.total_pages)
           
        }
        catch (error) {
            alert("Unable to get data(API not responding) :( ")
            console.log('Error in fetching:', error)
        }
    }

    const fetchseries = async (currenttvPage) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=fd1282bc892320382c1713167a6f886c&language=en-US&page`)
            const result = await response.json()
            setSeries(result.results)
            settotaltvPages(result.total_pages)
           
        }
        catch (error) {
            alert("Unable to get data(API not responding) :( ")
            console.log('Error in fetching:', error)
         }
    }

    const handleSearch = async (query) => {
        if (query.trim() === '') {
            alert('Search is empty');
        }
        else {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=fd1282bc892320382c1713167a6f886c&include_adult=false&language=en-US&page=1`)
                const result = await response.json()
                setMovies(result.results);
            } catch (error) {
                alert("Unable to search :( ")
                console.log("unable to search, API not responding", error)
            }
        }
    }

    useEffect(() => {
        fetchmovies(currentPage)
        fetchseries(currenttvPage)
    }, [currentPage, currenttvPage])

    const handlePage = (page)=>
    {
        setcurrentPage(page);
    }

    return (
        <div className='main'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/movies/*' element={<div><Navbar onSearch={handleSearch}/><Movieslist movies={movies} /><Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePage} /></div>} />
                    <Route path='/tv/*' element={<div><Navbar onSearch={handleSearch} /><Tvlist series={series} /><Pagination currentPage={currenttvPage} totalPages={totaltvPages} onPageChange={setcurrenttvPage} /></div>} />
                    <Route path='/favmovies/*' element={<div><Navbar onSearch={handleSearch} /><Favmovies movies={movies}/></div>} />
                    <Route path='/favtv/*' element={<div><Navbar onSearch={handleSearch} /><Favtv /></div>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}  