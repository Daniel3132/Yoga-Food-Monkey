import React from 'react'
import { useNavigate } from 'react-router-dom'
import vegetables from '../../assets/veg-char.png'
import '../../styles/AppFrags/inicio.scss'

const Inicio = () => {
  const navigate = useNavigate();
  return (
    <section id='inicio'>
        <div>
            <div className="circles"></div>
            <div className="circles active"></div>
            <div className="circles"></div>
            <div className="circles"></div>
        </div>
        <img src={vegetables} alt="" />
        <h1>Greatest habits.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo voluptates alias vitae nesciunt, eaque sapiente repellat mollitia deserunt! Ducimus, quod ut </p>
        <button onClick={()=>navigate('/app/meals')}>Next</button>
    </section>
  )
}

export default Inicio