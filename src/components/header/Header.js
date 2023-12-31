import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/IMG-20220813-WA0001.jpg'
import HeaderSocials from './HeaderSocials'
import{BsFillArrowDownSquareFill} from 'react-icons/bs'
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
  return (
   <section className='header__section'>
    <div className="container header__container">
      <h2>Hello I'm</h2>
      <p>Madhuri Udutha</p>
      <h5 className="type"> <Typewriter
            words={['Front-End-Developer', 'Software Developer', 'JavaScript Developer ', 'ReactJS Developer']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={70}
            delaySpeed={1000}
          /></h5>
      <CTA/>
      <a href="#contact" className='scroll__down'><BsFillArrowDownSquareFill/></a>
      <HeaderSocials/>
      <div >
        <img className='me' src={me} alt="Pic missing" />
      </div>
      
    </div>
   </section>
  ) 
}

export default Header;