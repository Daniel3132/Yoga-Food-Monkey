import React from 'react'
import { useNavigate } from 'react-router-dom';
import { lunchArray } from '../../helpers/dataApp';
import avatar from '../../assets/avatar.png'
import arrowleft from '../../assets/app/arrowleft.png'
import SearchBar from './SearchBar'
import '../../styles/AppFrags/meals.scss'
import Footer from './Footer'

const Lunch = () => {
  const navigate = useNavigate();
  const lunch = lunchArray;
  return (
    <>
      <section className='init'>
        <nav>
          <img onClick={() => navigate('/app/meals')} src={arrowleft} alt="" />
          <img src={avatar} alt="" />
        </nav>
        <h2>Meals.</h2>
        <SearchBar />
        <div className="filters">
          <button className='active'>All</button>
          <button>Vegetarian</button>
          <button>Vegan</button>
        </div>
        <div className='cardsCont'>
          {
            lunch.map((m, index) =>
              <div className='cardLunch' key={index}>
                <img src={m.imagen} alt="" />
                <div>
                  <b>{m.nombre}</b>
                  <p>{m.descripcion}</p>
                </div>
                <b>{m.tiempo} min</b>
              </div>
            )
          }
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Lunch