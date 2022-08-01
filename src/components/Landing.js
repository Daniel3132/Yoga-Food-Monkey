import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../styles/landing.scss'
import monkeyLogo from '../assets/monkeyLogo.png';
import vegetables from '../assets/veg-char.png';
import play from '../assets/play.png';
import burger from '../assets/burger.png';
import burgerw from '../assets/Burgerw.png';
import avatar from '../assets/avatar.png';
import mealsPhone from '../assets/mealsphone.png';
import recipies from '../assets/recipies.png';
import salad from '../assets/salad.png';
import sushi from '../assets/sushi.png';
import calories from '../assets/calories.png';
import delicious from '../assets/delicious.png';
import healthy from '../assets/healthy.png';
import plato from '../assets/plato.png';
import Twitter from '../assets/Twitter.png';
import Facebook from '../assets/Facebook.png';
import Linkedin from '../assets/Linkedin.png';
import MonkeyLogo2 from '../assets/Monkey-Logo-3.png';
import Arrow from '../assets/Arrow.png';

const Landing = () => {
    const navigate = useNavigate();
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
                        <h1>Greatest Habits.</h1>
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
                        <img className='burger' src={burger} alt="" />
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
                <img className='burger' src={burgerw} alt="" />

            <section className="appShow">
                <div className="cont">
                <img className='burger' src={burgerw} alt="" />
                    <div className='phoneShow'>
                        <div className='card recipiesCont carta1'>
                            <div className="recipies">
                                <img src={recipies} alt="" />
                            </div>
                            <p>All your meals with personalized recipes.</p>
                        </div>
                        <div className="card carta2">
                            <b>Take care of your health.</b>
                            <div className='row'>
                                <div>
                                    <img src={calories} alt="" />
                                    <small>Calories</small>
                                </div>
                                <div>
                                    <img src={delicious} alt="" />
                                    <small>Delicious</small>
                                </div>
                                <div>
                                    <img src={healthy} alt="" />
                                    <small>Healthy</small>
                                </div>
                            </div>
                        </div>
                        <div className="card row carta3">
                            <img src={sushi} alt="" />
                            <p>Learn new ways to improve your health in your routine</p>
                        </div>
                        <img src={salad} alt="" className='carta4' />
                        <div className='phoneCont'>
                            <div className='imgCont'>
                                <img src={mealsPhone} alt="" />
                            </div>
                        </div>
                        <img className='carta5' src={plato} alt="" />
                    </div>
                    <div>
                        <h2>Greatest habits.</h2>
                        <div>
                            <p>Good nutrition can help: Reduce the risk of some diseases, including heart disease, diabetes, stroke, some cancers, and osteoporosis.</p>
                        </div>
                        <button className='downloadBtn'>Download</button>
                    </div>
                </div>

            </section>

            <footer>
                <div>
                    <div>
                        <img className='responsive' src={MonkeyLogo2} alt="" />
                        <b>+0 (0000) 000 00-00</b>
                        <p>danielcorrea3131@gmail.com</p>
                    </div>
                    <div>
                        <strong>Quick Links</strong>
                        <div className='linksCont responsive'>
                            <div>
                                <Link to='/'>Product</Link>
                                <Link to='/'>Information</Link>
                            </div>
                            <div>
                                <Link to='/'>Company</Link>
                                <Link to='/'>Foonkie monkey</Link>
                            </div>
                        </div>
                        <select name="links" className='selector' onChange={(e)=>navigate(e.target.value)}>
                            <option value="Producto">Producto</option>
                            <option value="company">Company</option>
                            <option value="Information">Information</option>
                            <option value="Foonkie monkey">Foonkie monkey</option>
                        </select>
                    </div>
                    <div>
                        <strong>Subscribe</strong>
                        <div>
                            <input type="text" name="" id="" />
                            <button type="submit">
                                <img src={Arrow} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='footer2'>
                    <div className='redesCont'>
                        <div className='circleRedes'>
                            <img src={Linkedin} alt="" />
                        </div>
                        <div className='circleRedes'>
                            <img src={Facebook} alt="" />
                        </div>
                        <div className='circleRedes'>
                            <img src={Twitter} alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='responsive'>Powered by </p>
                            <img src={MonkeyLogo2} alt="" />
                        </div>
                    </div>
                    <div className='redesCont'>
                        <p>© 2021 FM. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Landing