import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Beatriz maranhão',
    github: '#',
    demo: 'https://beatrizmaranhao.vnda.dev/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Kband',
    github: '#',
    demo: 'https://www.kband.com.br/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Behá',
    github: '#',
    demo: 'https://www.beha.com.br/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Fran Art & Decor',
    github: '#',
    demo: 'https://www.franarteedecor.com.br/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Pictology',
    github: '#',
    demo: 'https://www.pictology.com.br/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Grupo Rocha',
    github: '#',
    demo: 'https://gruporochasaude.vnda.dev/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio