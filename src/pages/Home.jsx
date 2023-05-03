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
        <div className='footer_color-red'></div>
        <div className='footer_color-black'></div>
        <div className='footer_circles-contain'>
          <div className='footer_circle-white'>
          <div className='footer_circle-gray'></div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home