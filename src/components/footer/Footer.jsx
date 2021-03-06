import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import LOGO from '../../assets/logo-dgr.png'

const Footer = () => {
  return (
    <footer>
      <div className="logo__footer">
        <img src={LOGO} className="logo-dgr" alt="Logo" />
      </div>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/DouglasGhiraldello/"><FaFacebook /></a>
        <a href="https://www.instagram.com/rdouggg/"><AiOutlineInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Douglas Ghiraldello Rodrigues</small>
      </div>
    </footer>
  )
}

export default Footer