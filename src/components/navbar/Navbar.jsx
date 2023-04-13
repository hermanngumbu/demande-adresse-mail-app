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

          <div className="navigationbar">
              <div className='logo'>
                  <img src={logo} alt="logo adn" />
              </div>
              <div className='admin'>
                  <div >
                      <p className='text-admin' onClick={handleClick} >Se connecter en tant que admin</p>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Navbar