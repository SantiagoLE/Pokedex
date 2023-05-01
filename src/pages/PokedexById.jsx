import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import "./styles/pokedexById.css"

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

      <section>
        <h2>Stats</h2>
        <ul>
          <li className='a'><span>HP</span><span>{pokemon?.stats[0].base_stat}</span></li>
          <li className='b'><span>Attack</span><span>{pokemon?.stats[1].base_stat}</span></li>
          <li><span>Defense</span><span>{pokemon?.stats[2].base_stat}</span></li>
          <li><span>Seed</span><span>{pokemon?.stats[5].base_stat}</span></li>
        </ul>
      </section>



    </article>
  )
}

export default PokedexById