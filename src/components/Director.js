import React from "react"

const Director = ({name, movies}) => {

    const movieElements = movies.map(movie => <li key={movie}>{movie}</li>)

    return (
        <div>
            <h2>{name}</h2>
            <ul>{movieElements}</ul>
        </div>
    )
}

export default Director