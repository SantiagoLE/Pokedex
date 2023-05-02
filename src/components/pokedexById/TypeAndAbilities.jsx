import React from 'react'
import "./styles/TypeAndAbilities.css"

const TypeAndAbilities = ({pokemon}) => {
  return (
    <div className='typeAndAbilities_containt'>

     <section className='TypeAndAbilities_section'>
    <h3 className='TypeAndAbilities_section-title'>Types</h3>
    <ul className='TypeAndAbilities_section-list'>
      {
        pokemon?.types.map(type => (
          <li className={`TypeAndAbilities_item-tipe ${type.type.name}`} key={type.slot}>{type.type.name}</li>
        ))
      }
    </ul>
  </section>

  <section className='TypeAndAbilities_section'>
  <h3 className='TypeAndAbilities_section-title'>Abilities</h3>
    <ul className='TypeAndAbilities_section-list'>
      {
        pokemon?.abilities.map(ability => (
          <li className='TypeAndAbilities_item-ability' key={ability.slot}>{ability.ability.name}</li>
        ))
      }
    </ul>
  </section>
    </div>
   
  )
}

export default TypeAndAbilities