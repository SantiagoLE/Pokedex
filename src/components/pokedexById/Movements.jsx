import React from 'react'
import "./styles/movements.css"

const Movements = ({pokemon}) => {

  return (
    <section>
    <h3>Movements</h3>
    <ul>
      {
       pokemon?.moves.map(move => (
        <li key={move.move.url}>{move.move.name}</li>
       )) 
      }
    </ul>
  </section>

  )
}

export default Movements