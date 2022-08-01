import React from 'react'
import { useNavigate } from 'react-router-dom'
import avatar from '../../assets/avatar.png'
import arrowleft from '../../assets/app/arrowleft.png'
import SearchBar from './SearchBar'
import '../../styles/AppFrags/meals.scss'
import { mealsArray } from '../../helpers/dataApp'
import Footer from './Footer'

const Meals = () => {
  const navigate = useNavigate();
  const meals = mealsArray;
  return (
    <>
      <section className='init'>
        <nav>
          <img onClick={() => navigate('/app')} src={arrowleft} alt="" />
          <img src={avatar} alt="" />
        </nav>
        <h2>Meals.</h2>
        <SearchBar />
        <div className='cardsCont'>
          {
            meals.map((m, index) =>
              <div onClick={() => navigate('/app/' + m.nombre.toLowerCase())} className='card' key={index}>
                <img src={m.imagen} alt="" />
                <b>{m.nombre}</b>
                <small>{m.recipes} Recipes</small>
              </div>
            )
          }
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Meals