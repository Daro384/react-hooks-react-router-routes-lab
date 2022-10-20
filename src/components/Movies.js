import React from "react"
import Movie from "./Movie"
import { movies } from "../data"

function Movies() {
  const movieElements = movies.map(movie => {
    return (
      <Movie
        key={movie.title}
        title={movie.title}
        time={movie.time}
        genres={movie.genres}
      />
    )
      
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {movieElements}
    </div>
  )
}

export default Movies;
