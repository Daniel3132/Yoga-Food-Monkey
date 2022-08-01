import React from 'react'
import { useNavigate } from 'react-router-dom'
import avatar from '../../assets/avatar.png'
import arrowleft from '../../assets/app/arrowleft.png'
import '../../styles/AppFrags/meals.scss'
import { questionsArray } from '../../helpers/dataApp'
import Footer from './Footer'

const Form = () => {
  const navigate = useNavigate();

  return (
    <section className='form'>
      <nav>
        <img onClick={() => navigate('/app/meals')} src={arrowleft} alt="" />
        <img src={avatar} alt="" />
      </nav>
      <h2>Breakfast.</h2>
      <form action='get'>
        {
          questionsArray.map((q, index) =>
            <div className='question' key={index}>
              <p>{q.question}</p>
              {
                q.options.map((op, index) =>
                  <div className='options' key={index}>
                    <label htmlFor={op}>{op}</label>
                    <input type="radio" name='answ' value={op} />
                  </div>
                )
              }
            </div>
          )
        }
        <button type="submit">Send</button>
      </form>
      <Footer />
    </section>
  )
}

export default Form