import React from "react"

const Movie = ({title, time, genres}) => {
    const genresElements = genres.map(genre => {
        return (
        <li key={genre}>
            {genre}
        </li>
        )
    })
    return (
        <div>
            <h2>{title}</h2>
            <p>Duration: {time}</p>
            <ul>{genresElements}</ul>
        </div>
    )
}

export default Movie