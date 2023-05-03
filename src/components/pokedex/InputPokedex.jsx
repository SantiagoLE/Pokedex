import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setPokemonName } from '../../store/slices/pokemonNameSearch.slice'
import "./styles/inputPokedex.css"

const InputPokedex = () => {

    const inputPoke = useRef()

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setPokemonName(inputPoke.current.value.trim().toLowerCase()))
    }
    return (
        <div className='inputPokedex_form-contain'>
            <form className='inputPokedex_form' onSubmit={handleSubmit}>
                <input className='inputPokedex_form-input' ref={inputPoke} type="text" placeholder='Search Pokemon...'/>
                <button className='inputPokedex_form-button'>Search</button>
            </form>
        </div>
    )
}

export default InputPokedex