import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import "./styles/pokemonCard.css"

const PokemonCard = ({ url }) => {

    const [pokemon, getPokemon] = useFetch(url)

    useEffect(() => {
        getPokemon()
    }, [])



    console.log(pokemon);

    return (
        <article className={`pokemon_card ${pokemon?.types.length === 1 ? pokemon?.types[0].type.name : `${pokemon?.types[0].type.name}_${pokemon?.types[1].type.name}`}`}>
            <div className={`pokemon_card-backgroundType  ${pokemon?.types.length === 1 ? pokemon?.types[0].type.name : `${pokemon?.types[0].type.name}_${pokemon?.types[1].type.name}`}`}>

            </div>
            <div className='pokemon_card-info'>

                <img className='pokemon_card-img' src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
                <h2 className='pokemon_card-name'>{pokemon?.forms[0].name}</h2>
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
                        <li className='pokemon_card-item'><span className='pokemon_card-itemTitle'>HP</span><span className={`pokemon_card-itemValue ${pokemon?.types.length === 1 ? pokemon?.types[0].type.name : `${pokemon?.types[0].type.name}_${pokemon?.types[1].type.name}`}`}>{pokemon?.stats[0].base_stat}</span></li>
                        <li className='pokemon_card-item'><span className='pokemon_card-itemTitle'>DEFENSE</span><span className={`pokemon_card-itemValue ${pokemon?.types.length === 1 ? pokemon?.types[0].type.name : `${pokemon?.types[0].type.name}_${pokemon?.types[1].type.name}`}`}>{pokemon?.stats[2].base_stat}</span></li>
                    </ul>
                    <ul className='pokemon_card-list'>
                        <li className='pokemon_card-item'><span className='pokemon_card-itemTitle'>ATTACK</span><span className={`pokemon_card-itemValue ${pokemon?.types.length === 1 ? pokemon?.types[0].type.name : `${pokemon?.types[0].type.name}_${pokemon?.types[1].type.name}`}`}>{pokemon?.stats[1].base_stat}</span></li>
                        <li className='pokemon_card-item'><span className='pokemon_card-itemTitle'>SPEED</span><span className={`pokemon_card-itemValue ${pokemon?.types.length === 1 ? pokemon?.types[0].type.name : `${pokemon?.types[0].type.name}_${pokemon?.types[1].type.name}`}`}>{pokemon?.stats[5].base_stat}</span></li>
                    </ul>
                </section>
            </div>









        </article>
    )
}

export default PokemonCard