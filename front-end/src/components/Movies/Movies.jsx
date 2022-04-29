import React from 'react'
import { useEffect, useState } from 'react'

import { urlFor, client } from '../../client'

import './Movies.css'

const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const query = '*[_type == "movies"]';

        client.fetch(query)
            .then((data) => {
                setMovies(data)
            })
    }, [])
    
    return (
    <>
        <h2>Movie Reviews:</h2>
        <div className='MoviesSection'>
            {movies.map((movie, index) => (
                <div className='movie' key={movie.name + index}>
                    <img src={urlFor(movie.img)} alt={movie.title} />
                    <h3>{movie.name}</h3>
                    <br />
                    <p>{movie.timeDuration}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default Movies