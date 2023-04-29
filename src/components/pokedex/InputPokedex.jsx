import React, { useRef } from 'react'

const InputPokedex = () => {

    const inputPoke = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        console.log(inputPoke.current.value)
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