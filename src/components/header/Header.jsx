import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'
import HeaderLogo from './HeaderLogo'

const Header = () => {
  return (
    <header>
      <div className="top-header">
        <HeaderLogo />
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header