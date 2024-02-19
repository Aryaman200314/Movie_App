import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHeart, FaSun, FaMoon } from "react-icons/fa";

export default function Home() {
    const navigate = useNavigate()
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        alert('Try new dark theme!')
    }, [])

    return (
        <>
        <div>

      
            <h1 className='home-h1'>What would you like to watch?</h1>
            <button onClick={toggleTheme} className='mode-btn'>
                {theme === 'light' ? <FaSun /> : <FaMoon />}
            </button>
            <div className='home'>
                <button onClick={() => navigate("/movies")}>Movies</button>
                <button onClick={() => navigate("/tv")}>TV Shows</button>
            </div>
            <h3 className='water-mark'>Made with <FaHeart className='heart-active' /> by aryaman</h3>
            </div>
        </>
    )
}
