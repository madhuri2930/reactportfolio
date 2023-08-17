import React from 'react'
import "./about.css"
import Image from "../../assets/IMG-20220813-WA0001.jpg";
import{FaAward} from 'react-icons/fa'
import{FaFolderOpen} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h4>Get to Know</h4>
      <h1>About Me</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className='image' src={Image} alt="pic missing" />
          </div>
        </div>
      

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
          <FaAward className='about__icons'/>
            <h5>Experience</h5>
            <small>(1 Year)</small>
          </article>
          <article className="about__card">
          <FaFolderOpen className='about__icons'/>
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
          
        </div>
        <p>Having 1 year experience in React.js at Cognizant Technology Solutions and Bachelor's Degree in computer science. Ability to work with HTML, CSS, Java Script and ReactJS. Can work well under pressure and make the best of any situation. Having very good interpersonal skills and communication skills(immediate joinee)</p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
      
      
    </section>
  )
}

export default About;