import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { setFilterTypePokemon } from '../../store/slices/filterTypePokemons.slice'

const PokeList = () => {

const dispatch = useDispatch()

    const url = `https://pokeapi.co/api/v2/type/`
    const [allTypePoke, getTypePoke] = useFetch(url)

    useEffect(() => {

        getTypePoke()

    }, [])

    const typeSelect = useRef()

    const handleChange = () =>{
        if(typeSelect.current.value === "allPokemons"){
            dispatch(setFilterTypePokemon(false));
        }else{
            dispatch(setFilterTypePokemon(typeSelect.current.value));
        }
        
    }


    return (


        <div className='poke-container'>
            <select ref={typeSelect} onChange={handleChange}>
                <option value="allPokemons">All Pokemons</option>
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