import React from 'react'
import "./styles/movements.css"

const Movements = ({pokemon}) => {

  return (
    <section className='movements_section'>

    <h2 className='movements_title'>Movements</h2>
    
    <ul className='movements_list'>
      {
       pokemon?.moves.map(move => (
        <li className='movements_item' key={move.move.url}>{move.move.name}</li>
       )) 
      }
    </ul>
  </section>

  )
}

export default Movements