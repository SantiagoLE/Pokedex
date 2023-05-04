import  { useRef } from 'react'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerName } from '../../store/slices/trainerName.slice'
import "./styles/formNameUser.css"

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
    <div className='form_name-contain'>
        <form className='form' onSubmit={handleSubmit}>
            <input className='form_input' ref={inputName} type="text" placeholder='Input name...'/>
            <button className='form_button'>Start.</button>
        </form>
    </div>
  )
}

export default FormNameUser