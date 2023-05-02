import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { setFilterTypePokemon } from '../../store/slices/filterTypePokemons.slice'
import { setPokemonName } from '../../store/slices/pokemonNameSearch.slice'

const PokeList = () => {

    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const url = `https://pokeapi.co/api/v2/type/`
    const [allTypePoke, getTypePoke] = useFetch(url)

    useEffect(() => {

        getTypePoke()

    }, [])

    const typeSelect = useRef()




    const handleClick = () => {
        setIsOpen(!isOpen)

        if (isOpen) {
            if (typeSelect.current.value === "allPokemons") {
                dispatch(setFilterTypePokemon(false));
                dispatch(setPokemonName(false));
            } else {
                dispatch(setFilterTypePokemon(typeSelect.current.value));
                dispatch(setPokemonName(false));
            }
        }

    }


    return (

        <div className='poke-container'>
            <select ref={typeSelect} onClick={handleClick}  >
                <option value="allPokemons" >all pokemons</option>
                {
                    allTypePoke?.results.map(typePoke => (
                        <option key={typePoke.name} value={typePoke.name} >{typePoke.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default PokeList