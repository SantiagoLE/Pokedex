import React,{ useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import "./styles/pokemonCard.css"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



const PokemonCard = ({ url, name }) => {

    const {pokemonName} = useSelector(state => state)

   const urlSeacrh = pokemonName ? `https://pokeapi.co/api/v2/pokemon/${pokemonName}` : url
 
    const [pokemon, getPokemon] = useFetch(urlSeacrh)

    useEffect(() => {
        getPokemon()
    }, [urlSeacrh])

    const navigate = useNavigate()

const handleClick = (name) => {
   navigate (`/pokedex/${name}`)
}


    return (
        <article className={`pokemon_card ${pokemon?.types[0].type.name}`} onClick={() => handleClick(name)}>
            <div className={`pokemon_card-backgroundType  ${pokemon?.types[0].type.name}`}></div>
          
            <div className='pokemon_card-info'>

                <img className='pokemon_card-img' src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.name} />
                <h2 className='pokemon_card-name'>{pokemon?.name}</h2>
                <ul className='pokemon_card-types'>
                    {
                        pokemon?.types.map((poke, index) => (
                            <li key={poke.slot}>{
                                pokemon?.types.length === 1
                                    ? poke.type.name
                                    : index === 0
                                        ? `${poke.type.name} /`
                                        : poke.type.name
                            }
                            </li>
                        ))
                    }
                </ul>

                <h6 className='pokemon_card-titleType'>Type</h6>

                <section className='pokemon_card-section'>
                    <ul className='pokemon_card-list'>
                        <li className='pokemon_card-item'><span className='pokemon_card-itemTitle'>HP</span><span className={`pokemon_card-itemValue ${pokemon?.types[0].type.name}`}>{pokemon?.stats[0].base_stat}</span></li>
                        <li className='pokemon_card-item'><span className='pokemon_card-itemTitle'>DEFENSE</span><span className={`pokemon_card-itemValue ${pokemon?.types[0].type.name}`}>{pokemon?.stats[2].base_stat}</span></li>
                    </ul>
                    <ul className='pokemon_card-list'>
                        <li className='pokemon_card-item'><span className='pokemon_card-itemTitle'>ATTACK</span><span className={`pokemon_card-itemValue ${pokemon?.types[0].type.name}`}>{pokemon?.stats[1].base_stat}</span></li>
                        <li className='pokemon_card-item'><span className='pokemon_card-itemTitle'>SPEED</span><span className={`pokemon_card-itemValue ${pokemon?.types[0].type.name}`}>{pokemon?.stats[5].base_stat}</span></li>
                    </ul>
                </section>
            </div>



        </article>
    )
}

export default PokemonCard