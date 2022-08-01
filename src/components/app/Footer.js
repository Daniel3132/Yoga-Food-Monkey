import React from 'react'
import house from '../../assets/app/house.png'
import profile from '../../assets/app/profile.png'
import plato from '../../assets/plato.png'

const Footer = () => {
  return (
    <section id='footerApp'>
      <div>
        <img src={house} alt=""></img>
        <p>Home</p>
      </div>
      <img className='plato' src={plato} alt=""></img>
      <div>
        <img src={profile} alt=""></img>
        <p>Profile</p>
      </div>
    </section>
  )
}

export default Footer