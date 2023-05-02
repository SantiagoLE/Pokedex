import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import "./styles/pokedexById.css"
import Stats from '../components/pokedexById/Stats'
import Movements from '../components/pokedexById/Movements'

const PokedexById = () => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  const [pokemon, getPokemon] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [url])

  console.log(pokemon);



  return (
    <article>
      <img src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.forms[0].name} />
      <h2><span># {pokemon?.id}</span><span>{pokemon?.name}</span></h2>
      <ul>
        <li><span>Weight</span><span>{pokemon?.weight / 10} kg</span></li>
        <li><span>Height</span><span>{pokemon?.height / 10} m</span></li>
      </ul>

      <section>
        <h3>Types</h3>
        <ul>
          {
            pokemon?.types.map(type => (
              <li key={type.slot}>{type.type.name}</li>
            ))
          }
        </ul>
      </section>

      <section>
      <h3>Abilities</h3>
        <ul>
          {
            pokemon?.abilities.map(ability => (
              <li key={ability.slot}>{ability.ability.name}</li>
            ))
          }
        </ul>
      </section>

<Stats pokemon={pokemon}/>
     
     <hr />

<Movements pokemon={pokemon}/>
     


    </article>
  )
}

export default PokedexById