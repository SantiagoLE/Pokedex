import React from 'react'
import "./styles/typeAndAbilities.css"

const TypeAndAbilities = ({pokemon}) => {
  return (
    <div className='typeAndAbilities_containt'>

     <section className='typeAndAbilities_section'>
    <h3 className='typeAndAbilities_section-title'>Types</h3>
    <ul className='typeAndAbilities_section-list'>
      {
        pokemon?.types.map(type => (
          <li className={`typeAndAbilities_item-tipe ${type.type.name}`} key={type.slot}>{type.type.name}</li>
        ))
      }
    </ul>
  </section>

  <section className='typeAndAbilities_section'>
  <h3 className='typeAndAbilities_section-title'>Abilities</h3>
    <ul className='typeAndAbilities_section-list'>
      {
        pokemon?.abilities.map(ability => (
          <li className='typeAndAbilities_item-ability' key={ability.slot}>{ability.ability.name}</li>
        ))
      }
    </ul>
  </section>
    </div>
   
  )
}

export default TypeAndAbilities