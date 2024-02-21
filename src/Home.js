import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHeart, FaSun, FaMoon, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
    const navigate = useNavigate()
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        
    }, [])

    return (
        <>
        <div className='home-main'>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Protest+Riot&display=swap')
</style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Petit+Formal+Script&family=Protest+Riot&display=swap')
</style>
      
            <h1 className='home-h1'>What would you like to watch?</h1>
            <button onClick={toggleTheme} className='mode-btn'>
                {theme === 'light' ? <FaSun /> : <FaMoon />}
            </button>
            <div className='home'>
                <button onClick={() => navigate("/movies")}>Movies</button>
                <button onClick={() => navigate("/tv")}>TV Shows</button>
            </div>
            <h3 className='water-mark'>Made with <FaHeart className='heart-active' /> by<a href='https://aryaman.bio.link/' target='_blank'> Aryaman</a></h3>
            
            <div className='links'> 
            <a href='https://www.linkedin.com/in/aryaman-sharma-07a233233/' target='_blank'><FaLinkedin/></a>
            <a href='https://github.com/Aryaman200314' target='_blank'><FaGithub/></a>

            </div>
           </div>
        </>
    )
}
