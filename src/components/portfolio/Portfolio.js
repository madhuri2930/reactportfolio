import React from 'react'
import './portfolio.css'
import food from '../../assets/hattieb1-1562135080.jpg'
import pro2 from '../../assets/pro2.jpg'
import clg from '../../assets/md-arafat-ul-alam-Xx2BrFj8IOQ-unsplash.jpg'
import pro4 from '../../assets/indian-country-flag-500x500.webp'
import pro5 from '../../assets/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.avif'
import pro6 from '../../assets/istockphoto-1336160936-612x612.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>My Recent Works</h4>
      <h1>Portfolio</h1>
      <div className="container portfolio__container">
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={food} alt="pic missing" />
          </div>
          <h3>Food Recipe Finder</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" target='_blank' rel="noopener noreferrer" className='btn'>Github</a>
          <a href="https://github.com" target='_blank' rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pro2} alt="pic missing" />
          </div>
          <h3>Calculator</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" target='_blank' rel="noopener noreferrer" className='btn'>Github</a>
          <a href="https://github.com" target='_blank' rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={clg} alt="pic missing" />
          </div>
          <h3>RMKN Institute</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" target='_blank' rel="noopener noreferrer" className='btn'>Github</a>
          <a href="https://github.com" target='_blank' rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pro4} alt="pic missing" />
          </div>
          <h3>India Flag</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" target='_blank' rel="noopener noreferrer" className='btn'>Github</a>
          <a href="https://github.com" target='_blank' rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pro5} alt="pic missing" />
          </div>
          <h3>E-COMMERCES Web-site</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" target='_blank' rel="noopener noreferrer" className='btn'>Github</a>
          <a href="https://github.com" target='_blank' rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pro6} alt="pic missing" />
          </div>
          <h3>Photography</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" target='_blank' rel="noopener noreferrer" className='btn'>Github</a>
          <a href="https://github.com" target='_blank' rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio;