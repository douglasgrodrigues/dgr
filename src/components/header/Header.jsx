import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.svg'
import bgicon from '../../assets/bg-icon.svg'
import HeaderSocials from './HeaderSocials'
import LOGO from '../../assets/logo-dgr.png'
import background from '../../assets/bg-header.jpg'

const Header = () => {
  return (
    <header>
      <div className="background-header">
        <img src={background} className="logo-dgr" alt="Logo" />
      </div>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Douglas Rodrigues</h1>
        <h5 className="text-light">Front-End Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header