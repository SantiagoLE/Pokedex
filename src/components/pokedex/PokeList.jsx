import { useEffect, useRef, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterTypePokemon } from '../../store/slices/filterTypePokemons.slice'
import { setPokemonName } from '../../store/slices/pokemonNameSearch.slice'
import { setCurrentPage } from '../../store/slices/currentPage.slice'
import "./styles/pokeList.css"
import { setTypePokemon } from '../../store/slices/typeSelected.slice'

const PokeList = () => {

    const dispatch = useDispatch()

    const url = `https://pokeapi.co/api/v2/type/`
    const [allTypePoke, getTypePoke] = useFetch(url)

    useEffect(() => {

        getTypePoke()

    }, [])

    const typeSelect = useRef()


    const { selectedTypePokemon } = useSelector(state => state)


    const handleChangeType = (type) => {
        dispatch(setTypePokemon(type.target.value))

        if (typeSelect.current.value === "allPokemons") {
            dispatch(setFilterTypePokemon(false));
            dispatch(setPokemonName(false));
            dispatch(setCurrentPage(1));
        } else {
            dispatch(setFilterTypePokemon(typeSelect.current.value));
            dispatch(setPokemonName(false));
            dispatch(setCurrentPage(1));

        }
    }


    return (
        <div className='pokelist_contain'>
            <select className='pokelist_select' ref={typeSelect} onChange={handleChangeType}>
                <option className='pokelist_option' value={selectedTypePokemon}>{selectedTypePokemon}</option>
                {selectedTypePokemon !== "allPokemons" && (
                    <option className='pokelist_option' value="allPokemons">all pokemons</option>
                )}
                {allTypePoke?.results.map(typePoke => {
                    if (typePoke.name !== "shadow" && typePoke.name !== "unknown" && selectedTypePokemon !== typePoke.name) {
                        return (
                            <option className='pokelist_option' key={typePoke.name} value={typePoke.name}>
                                {typePoke.name}
                            </option>
                        );
                    }
                    return null;
                })}
            </select>

        </div>
    )
}

export default PokeList