import React, { useRef } from 'react'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerName } from '../../store/slices/trainerName.slice'

const FormNameUser = () => {

   const inputName = useRef()

   const dispatch = useDispatch()

   const navigate = useNavigate()

const handleSubmit = e => {
e.preventDefault()
dispatch(setTrainerName(inputName.current.value.trim()))
navigate("/pokedex")
}


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