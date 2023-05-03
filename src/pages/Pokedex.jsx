import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import InputPokedex from '../components/pokedex/InputPokedex'
import PokeList from '../components/pokedex/PokeList'
import PokemonCard from '../components/pokedex/PokemonCard'
import useFetch from '../hooks/useFetch'
import "./styles/pokedex.css"

const Pokedex = () => {

    const { trainerName, filterTypePokemon, pokemonName } = useSelector(state => state)

    const url = filterTypePokemon
        ? `https://pokeapi.co/api/v2/type/${filterTypePokemon}`
        : `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`

    const [allPokemons, getAllPokemons] = useFetch(url)


    useEffect(() => {
        getAllPokemons()
    }, [url])


    return (
      <>
           <header className='pokedexById_header'>
      <img className='header_img' src="/pokedex.png" alt="" />
        <div className='header_color-red'></div>
        <div className='header_color-black'></div>
        <div className='header_circles-contain'>
          <div className='header_circle-white'></div>
          <div className='header_circle-gray'></div>
        </div>
      </header>
  <div className='pokedex_contain'>
            <p className='pokedex_paragraph'><span>Welcome {trainerName}</span></p>
            <div className='pokedex_input-contain'>
            <InputPokedex />
            <PokeList />
            </div>
           
            <div className='pokemon_card-containt'>
                {
                    pokemonName
                        ? <PokemonCard 
                        name={pokemonName}
                        />

                        :
                        filterTypePokemon
                            ? allPokemons?.pokemon?.map(pokemon => (
                                <PokemonCard
                                    key={pokemon.pokemon.url}
                                    url={pokemon.pokemon.url}
                                    name={pokemon.pokemon.name}
                                />
                            ))

                            : allPokemons?.results?.map(pokemon => (
                                <PokemonCard
                                    key={pokemon.url}
                                    url={pokemon.url}
                                    name={pokemon.name}
                                />
                            ))
                }

            </div>


        </div>
        </>
    )
}

export default Pokedex