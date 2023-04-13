import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/Logo-adn.png'
// import iconAdmin from '../../images/Vector.png'
import  './navbar.css'

const Navbar = () => {
    
    const navigate = useNavigate()
   const  handleClick = () => { 
         
        navigate('/login')
    }
  return (
      <div className='nav'>      
            <nav class="navbar fixed-top navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="./">
                    <img src={logo} alt="logo adn"  />
                    </a>
                    <div class="d-flex">
                        <button class="btn" type="submit"  onClick={handleClick}>Admin &#9996;</button>
                    </div>
                </div>
            </nav>
      </div>
  )
}

export default Navbar