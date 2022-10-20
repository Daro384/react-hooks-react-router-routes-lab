import React from "react";
import { actors } from "../data";
import Actor from "./Actor"

function Actors() {

  const actorElements = actors.map(actor => {
    return (
      <Actor 
        key={actor.name}
        name={actor.name}
        movies={actor.movies}
      />
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorElements}
    </div>
  )
}

export default Actors;
