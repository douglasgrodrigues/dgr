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
    avatar: AVTR1,
    name: 'FADERGS',
    review: 'Curso: Análise e Desenvolvimento de Sistemas (2021)'
  },
  {
    avatar: AVTR2,
    name: 'SENAI',
    review: 'Técnico em Informática (2015)'
  },
  {
    avatar: AVTR3,
    name: 'Harvard',
    review: 'cs50x'
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
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
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