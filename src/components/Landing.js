import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/landing.scss'
import monkeyLogo from '../assets/monkeyLogo.png';
import vegetables from '../assets/veg-char.png';
import play from '../assets/play.png';
import avatar from '../assets/avatar.png';

const Landing = () => {
    return (
        <>
            <section className='firstSec'>
                <nav>
                    <div className="logo">
                        <img src={monkeyLogo} alt="" />
                    </div>
                    <ul>
                        <li> <Link to='/'>Item 1</Link> </li>
                        <li> <Link to='/'>Item 2</Link> </li>
                        <li> <Link to='/'>Item 3</Link> </li>
                        <li><button>Login</button></li>
                    </ul>
                </nav>

                <section className="welcome">
                    <div>
                        <h1>Greatest Habits</h1>
                        <div>
                            <p>Good nutrition can help: Reduce the risk of some diseases, including heart disease, diabetes, stroke, some cancers, and osteoporosis.</p>
                        </div>
                    </div>
                    <div className='vegetablesCont'>
                        <img src={vegetables} alt="" />
                    </div>
                </section>
                <div className='download'>
                    <div>
                    <button className='downloadBtn'>Download</button>
                    <img src={play} alt="" />

                    </div>
                </div>
            </section>
            <section className='comments'>
                <div>
                    <fieldset className="fieldset-1">
                        <legend>
                            Karen -New York
                            <img src={avatar} alt="" />
                        </legend>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </fieldset>
                    <fieldset className="fieldset-2">
                        <legend>
                            Karen -New York
                            <img src={avatar} alt="" />
                        </legend>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </fieldset>
                    <fieldset className="fieldset-3">
                        <legend>
                            Karen -New York
                            <img src={avatar} alt="" />
                        </legend>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </fieldset>
                    <fieldset className="fieldset-4">
                        <legend>
                            Karen -New York
                            <img src={avatar} alt="" />
                        </legend>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </fieldset>
                </div>
            </section>


        </>
    )
}

export default Landing