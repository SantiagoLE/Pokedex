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

// console.log(pokemonName);


    return (
        <div>
            <h1>Pokedex</h1>
            <p><span>Welcome {trainerName}</span></p>
            <InputPokedex />
            <PokeList />
            <div className='pokemon_card-containt'>
                {
                    pokemonName
                        ? <PokemonCard />
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
    )
}

export default Pokedex