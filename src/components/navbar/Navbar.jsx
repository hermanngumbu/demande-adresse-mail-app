import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/Logo-adn.png'
import iconAdmin from '../../images/Vector.png'
import  './navbar.css'

const Navbar = () => {
    
    const navigate = useNavigate()
   const  handleClick = () => { 
         
        navigate('/login')
    }
  return (
      <>
          

          <div className="navbar">
              <div className='left'>
                <Link to={'./'}>
                  <img src={logo} alt="logo adn" />
                </Link>
              </div>
              <div className='right'>
                  <div >
                      <h1 className='text-admin' onClick={handleClick} >Se connecter en tant que admin</h1>
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