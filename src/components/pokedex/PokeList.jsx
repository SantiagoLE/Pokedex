import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'

const PokeList = () => {

    const url = `https://pokeapi.co/api/v2/type/`
    const [allTypePoke, getTypePoke] = useFetch(url)

    useEffect(() => {

        getTypePoke()

    }, [])


    return (


        <div className='poke-container'>
            <select id="">
                <option value="allPokemons">All Pokemons</option>
                {
                    allTypePoke?.results.map(typePoke => (
                        <option key={typePoke.name}>{typePoke.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default PokeList