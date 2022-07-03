import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/douglasgrodrigues/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/douglasgrodrigues" target="_blank"><AiFillGithub /></a>
      <a href="https://www.instagram.com/rdouggg/" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials