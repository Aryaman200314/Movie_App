import React, { useEffect, useState } from 'react'
import Movieslist from './Movieslist'
import Tvlist from './Tvlist'

export default function Favtv({series}){
  const [fav,setFav] = useState([])
  const favoriteSeriesIds = JSON.parse(localStorage.getItem("favoriteSeries")) || []

  const fetchseries = async() => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      const result = await response.json
      return result.results
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchseries().then(mainSeriesList => {
      const favoriteSeries = mainSeriesList.filter(series => 
        favoriteSeriesIds.some(([_,seriesId])=>seriesId === series.id)
      )
      setFav(favoriteSeries)
    })
  }, [favoriteSeriesIds])

  return (
    <div>
      <h2 className="text-center"></h2>
      {favoriteSeriesIds.length > 0 ? (
        <Tvlist series={fav}/>
      ) : (
        <>
          <h1>No favorite series!</h1>
        </>
      )}
    </div>
  )
}