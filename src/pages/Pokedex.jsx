import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import InputPokedex from '../components/pokedex/InputPokedex'
import PokeList from '../components/pokedex/PokeList'
import PokemonCard from '../components/pokedex/PokemonCard'
import useFetch from '../hooks/useFetch'
import "./styles/pokedex.css"

const Pokedex = () => {

    const url = `https://pokeapi.co/api/v2/pokemon?limit=281&offset=1000`
    const [allPokemons, getAllPokemons] = useFetch(url)

    useEffect(() => {
        getAllPokemons()
    }, [])


    const { trainerName } = useSelector(state => state)

    return (
        <div>
            <h1>Pokedex</h1>
            <p><span>Welcome {trainerName}</span></p>
            <InputPokedex />
            <PokeList />
            <div className='pokemon_card-containt'>
                {
                    allPokemons?.results.map(pokemon => (
                        <PokemonCard
                            key={pokemon.url}
                            url={pokemon.url}
                        />
                    ))
                }

            </div>


        </div>
    )
}

export default Pokedex