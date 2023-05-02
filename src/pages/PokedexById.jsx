import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import "./styles/pokedexById.css"
import Stats from '../components/pokedexById/Stats'
import Movements from '../components/pokedexById/Movements'
import TypeAndAbilities from '../components/pokedexById/TypeAndAbilities'

const PokedexById = () => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  const [pokemon, getPokemon] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [url])

  console.log(pokemon);



  return (
    <article className='pokedexById_contain'>


      <div className='pokedexById_info'>

        <header className={`pokedexById-backgroundType  ${pokemon?.types[0].type.name}`}>
        </header>

        <div className='pokedexByID_img-contain'>
          <img className='pokedexById_img' src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.forms[0].name} />
        </div>



        <h2 className={`pokedexById_title ${pokemon?.types[0].type.name}`}><span className='pokedexById_title-id'># {pokemon?.id}</span><span className='pokedexById_title-name'>{pokemon?.name}</span></h2>
        <ul className='pokedexByID_list'>
          <li className='pokedexByID_item'><span className='pokedexByID_item-title'>Weight</span><span className='pokedexByID_item-value'>{pokemon?.weight / 10} kg</span></li>
          <li className='pokedexByID_item'><span className='pokedexByID_item-title'>Height</span><span className='pokedexByID_item-value'>{pokemon?.height / 10} m</span></li>
        </ul>

        <TypeAndAbilities pokemon={pokemon} />

        <Stats pokemon={pokemon} />

        <Movements pokemon={pokemon} />
      </div>

    </article>
  )
}

export default PokedexById