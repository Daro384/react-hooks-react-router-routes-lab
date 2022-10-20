import React from "react"

const Actor = ({name, movies}) => {
    const movieElements = movies.map(movie => {
        return (
            <li key={movie}>{movie}</li>
        )
    })
    return (
        <div>
            <h2>{name}</h2>
            <ul>{movieElements}</ul>
        </div>
    )
}

export default Actor