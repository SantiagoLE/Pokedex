import React from 'react'
import FormNameUser from '../components/home/FormNameUser'
import "./styles/home.css"

const Home = () => {



  return (
    <div>
      <div className='home_img-contain'>
      <img className='home_img' src="/pokedex.png" alt="" />
      </div>
      
      <h2 className='home_greeting'>Hi Trainer !</h2>
      <p className='home_paragraph'>Please give us your trainer name to start</p>

      <FormNameUser />

      <footer className='home_footer'>
        <div className='color_red'></div>
        <div className='color_black'></div>
        <div className='circles_contain'>
          <div className='circle_white'>
          <div className='circle_gray'></div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home