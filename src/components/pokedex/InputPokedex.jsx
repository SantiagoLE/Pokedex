import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setPokemonName } from '../../store/slices/pokemonNameSearch.slice'

const InputPokedex = () => {

    const inputPoke = useRef()

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setPokemonName(inputPoke.current.value))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={inputPoke} type="text" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default InputPokedex