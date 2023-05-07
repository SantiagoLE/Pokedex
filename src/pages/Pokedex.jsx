import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import InputPokedex from '../components/pokedex/InputPokedex'
import PokeList from '../components/pokedex/PokeList'
import PokemonCard from '../components/pokedex/PokemonCard'
import useFetch from '../hooks/useFetch'
import "./styles/pokedex.css"
import Pagination from '../components/pokedex/Pagination'

const Pokedex = () => {

    const { trainerName, filterTypePokemon, pokemonName, currentPage } = useSelector(state => state)

    const url = filterTypePokemon
        ? `https://pokeapi.co/api/v2/type/${filterTypePokemon}`
        : `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`

    const [allPokemons, getAllPokemons] = useFetch(url)
    console.log(filterTypePokemon);

    useEffect(() => {
        getAllPokemons()
    }, [url])




    // PAGINACION 

    // Current page viene de un estado global
    const [pokemonsPerPag, setpokemonsPerPag] = useState(20) //Numero de elementos por pagina
    const totalPokemons = filterTypePokemon ? allPokemons?.pokemon?.length : allPokemons?.results?.length
    const lastIndex = currentPage * pokemonsPerPag //Numero de elementos por pagina
    const firstIndex = lastIndex - pokemonsPerPag //Numero de elementos por pagina

    return (
        <div className='pokedex_contain'>
            <header className='pokedex_header'>
                <img className='header_img' src="/pokedex.png" alt="" />
                <div className='header_color-red'></div>
                <div className='header_color-black'></div>
                <div className='header_circles-contain'>
                    <div className='header_circle-white'></div>
                    <div className='header_circle-gray'></div>
                </div>
            </header>
            <div className='pokedex_contain'>
                <p className='pokedex_paragraph'><span className='pokedex_paragraph-span1'>Welcome {trainerName}</span><span className='pokedex_paragraph-span2'>, enter the name of the pokemon you want to search for</span></p>
                <div className='pokedex_input-contain'>
                    
                    <InputPokedex />
                    <PokeList />

                </div>
                {
                    pokemonName
                        ? ""
                        : <Pagination
                            totalPokemons={totalPokemons}
                            pokemonsPerPag={pokemonsPerPag}
                        />

                }


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
                                )).slice(firstIndex, lastIndex)

                                : allPokemons?.results?.map(pokemon => (
                                    <PokemonCard
                                        key={pokemon.url}
                                        url={pokemon.url}
                                        name={pokemon.name}
                                    />
                                )).slice(firstIndex, lastIndex)

                    }

                </div>

                {
                    pokemonName
                        ? ""
                        : <Pagination
                            totalPokemons={totalPokemons}
                            pokemonsPerPag={pokemonsPerPag}
                        />

                }

            </div>
        </div>
    )
}

export default Pokedex