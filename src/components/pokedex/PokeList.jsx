import { useEffect, useRef, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { setFilterTypePokemon } from '../../store/slices/filterTypePokemons.slice'
import { setPokemonName } from '../../store/slices/pokemonNameSearch.slice'
import { setCurrentPage } from '../../store/slices/currentPage.slice'
import "./styles/pokeList.css"
// import { setErrorPokemon } from '../../store/slices/errorPokemon.slice'

const PokeList = () => {

    const dispatch = useDispatch()

    const url = `https://pokeapi.co/api/v2/type/`
    const [allTypePoke, getTypePoke] = useFetch(url)

    useEffect(() => {

        getTypePoke()

    }, [])

    const typeSelect = useRef()


const [optionSeleted, setOptionSeleted] = useState()

    const handleChangeType = (e) => {

     setOptionSeleted(e.target.value);
     
            if (typeSelect.current.value === "allPokemons") {
                dispatch(setFilterTypePokemon(false));
                dispatch(setPokemonName(false));
                dispatch(setCurrentPage(1));
            } else {
                dispatch(setFilterTypePokemon(typeSelect.current.value));
                dispatch(setPokemonName(false));
                dispatch(setCurrentPage(1));

            }
    // dispatch(setErrorPokemon(false))
    }


    return (

        <div className='pokelist_contain'>
                       <select className='pokelist_select' ref={typeSelect} onChange={handleChangeType} >
                       <option className='pokelist_option' value="allPokemons" disabled={"allPokemons" === optionSeleted}>all pokemons</option>
                {
                    allTypePoke?.results.map(typePoke => (
                    <option className='pokelist_option' key={typePoke.name} value={typePoke.name} disabled={typePoke.name === optionSeleted}>{typePoke.name}</option>
                       ))
                    }
            </select>
        </div>
    )
}

export default PokeList