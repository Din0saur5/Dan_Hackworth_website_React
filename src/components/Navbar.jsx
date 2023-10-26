import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import {HiFire} from "react-icons/hi"
import {FaBars, FaTimes} from "react-icons/fa"
//import {IconContext} from "react-icon/lib"

const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className='navbar-logo' >
                    <HiFire className='navbar-icon'/>
                </Link>
                <div className="menu-icon"></div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
