import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
  
    <nav className = "nav-top" >
      <NavLink  to = "/">acceuille </NavLink>
      <NavLink  to = "/produits">produits </NavLink>
      <NavLink  to = "/Contact">contact </NavLink>   
  
    </nav>

    
  )
}
