import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'

// import Swiper core and required modules
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const data = [
  {
    avatar: AVTR3,
    name: 'Harvard',
    review: 'cs50x'
  },
  {
    avatar: AVTR1,
    name: 'FADERGS',
    review: 'Análise e Desenvolvimento de Sistemas'
  },
  {
    avatar: AVTR2,
    name: 'SENAI',
    review: 'Técnico em Informática'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Certificações</h5>
      <h2>Educação</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={window.screen.width > 768 ? 2 : 1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt='Logo scholl' />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials