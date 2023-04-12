import React from 'react'
import logo from '../../images/Logo-adn.png'
import iconAdmin from '../../images/Vector.png'
import  './navbar.css'

const Navbar = () => {
  return (
      <>
          <div className="navbar">
              <div className='left'>
                  <img src={logo} alt="logo adn" />
              </div>
              <div className='right'>
                  <div>
                      <h1 className='text-admin' >Se connecter en tant que admin</h1>
                  </div>
                  <div>
                      <img src={iconAdmin} alt="icone admin" />
                  </div>
              </div>
          </div>
      </>
  )
}

export default Navbar