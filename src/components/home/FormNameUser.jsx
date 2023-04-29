import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerName } from '../../store/slices/trainerName.slice'

const FormNameUser = () => {

    const {trainerName} = useSelector(state => state)
   const inputName = useRef()

   const dispatch = useDispatch()

   const navigate = useNavigate()

const handleSubmit = e => {
e.preventDefault()
dispatch(setTrainerName(inputName.current.value.trim()))
navigate("/pokedex")
}

console.log(trainerName);

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input ref={inputName} type="text" />
            <button>Start</button>
        </form>
    </div>
  )
}

export default FormNameUser