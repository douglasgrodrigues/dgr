import React from 'react'
import './portfolio.css'
import infantus from '../../assets/infantus.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: infantus,
    title: 'For kids',
    github: '#',
    demo: 'https://infantus.vnda.dev/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'For Accessibility',
    github: '#',
    demo: 'https://powerlite.vnda.dev/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'For Design',
    github: '#',
    demo: 'https://jaderalmeida.vnda.dev/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'For tech',
    github: '#',
    demo: 'https://vaidetech.vnda.dev/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'For jewelry',
    github: '#',
    demo: 'https://stupidoficial.vnda.dev/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'For Fashion',
    github: '#',
    demo: 'https://faircloset.vnda.dev/'
  }
]
/* 
const data2 = [
  {
    id: 1,
    image: OQUEST,
    title: 'O Questionador',
    github: '#',
    demo: 'https://www.oquestionador.com/',
  },
  {
    id: 2,
    image: CARDIO,
    title: 'Cardio 4d',
    github: '#',
    demo: 'https://www.cardio4d.com/'
  },
] */

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

      {/* <div className="more-projects">
        <h2>Other projects</h2>

        <div className="container portfolio__container">
          {
            data2.map(({ id, image, title, github, demo }) => {
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
      </div> */}
    </section>
  )
}

export default Portfolio