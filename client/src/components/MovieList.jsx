import React, { useEffect, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard'

function MovieList(genreId) {
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        getMovieByGenreId()
    }, [])

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(res => {
            setMovieList(res.data.results)
        })
    }

  return (
    <div className='flex'>
        {movieList.map((item, index) => (
            <MovieCard />
        ))}
    </div>
  )
}

export default MovieList