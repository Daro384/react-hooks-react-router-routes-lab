import React from "react";
import { directors } from "../data";
import Director from "./Director"

function Directors() {
  const directorElements = directors.map(director => {
    return (
      <Director
        key={director.name}
        name={director.name}
        movies={director.movies}
      />
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorElements}
    </div>
  )
}

export default Directors;
