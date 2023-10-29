import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import {HiFire} from "react-icons/hi"
import {FaBars, FaTimes} from "react-icons/fa"
import {IconContext} from "react-icons"

const Navbar = () => {
  const[click, setClick] = useState(false)

  const handleClick = () =>  setClick(!click)
  const closeMobileMenu = () => setClick(false)
    
  
  
  return (
    <>
      <IconContext.Provider value={{color:"#fff"}}>
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className='navbar-logo' onClick={()=>{closeMobileMenu; window.scrollTo(0, 0)}}>
                    <HiFire className='navbar-icon'
                    />
                    Hackworth SE
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  {click? <FaTimes/>:<FaBars/>}
                </div>
                <ul className={click? "nav-menu active": "nav-menu"}>
                  <li className='nav-item'>
                    <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive? " activated": '')} onClick={closeMobileMenu}>
                      Home
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to="/About" className={({ isActive }) => "nav-links" + (isActive? " activated": '')} onClick={closeMobileMenu} >
                      About
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to="/Portfolio" className={({ isActive }) => "nav-links" + (isActive? " activated": '')} onClick={closeMobileMenu}>
                      Portfolio
                    </NavLink>
                  </li>
                  
                </ul>
            </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
