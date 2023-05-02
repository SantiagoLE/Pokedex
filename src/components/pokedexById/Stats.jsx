import React from 'react'
import "./styles/stats.css"

const Stats = ({pokemon}) => {

    const styles = {
        hp: {width:`${pokemon?.stats[0].base_stat}%`},
        attack: {width:`${pokemon?.stats[1].base_stat}%`},
    defense: {width:`${pokemon?.stats[2].base_stat}%`},
    speed: {width:`${pokemon?.stats[5].base_stat}%`}
      }

  return (
    <section className='stats_section'>
    <h2 className='stats_title'>Stats</h2>
  
      <h5 className='stats_title-item'>Hp:</h5>
      <div className='stats_bar-contain'>
        <div className='stats_bar'style={styles.hp}> </div>
        <p className='stats_bar-value'>{pokemon?.stats[0].base_stat}/150</p>
      </div>
      <h5 className='stats_title-item'> Attack:</h5>
       <div className='stats_bar-contain'>
        <div className='stats_bar'style={styles.attack}> </div>
        <p className='stats_bar-value'>{pokemon?.stats[1].base_stat}/150</p>
      </div>
      <h5 className='stats_title-item'>Defense:</h5>
       <div className='stats_bar-contain'>
        <div className='stats_bar'style={styles.defense}> </div>
        <p className='stats_bar-value'>{pokemon?.stats[2].base_stat}/150</p>
      </div>
      <h5 className='stats_title-item'>Speed:</h5>
       <div className='stats_bar-contain'>
        <div className='stats_bar'style={styles.speed}> </div>
        <p className='stats_bar-value'>{pokemon?.stats[5].base_stat}/150</p>
      </div>
  </section>
  )
}

export default Stats