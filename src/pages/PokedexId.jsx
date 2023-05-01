import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const PokedexId = () => {

const {name} = useParams()

const url = `https://pokeapi.co/api/v2/pokemon/${name}`

const [pokemon, getPokemon] = useFetch(url)

useEffect(() => {
    getPokemon()
}, [url])

console.log(pokemon);

  return (
    <article>
        <img src={pokemon?.sprites.other["official-artwork"].front_default}alt={pokemon?.forms[0].name} />
        <h2><span># {pokemon?.id}</span><span>{pokemon?.name}</span></h2>
        <ul>
            <li><span>Weight</span><span>{pokemon?.weight / 10} kg</span></li>
            <li><span>Height</span><span>{pokemon?.height / 10} m</span></li>
        </ul>
        
    </article>
  )
}

export default PokedexId