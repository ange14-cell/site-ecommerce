import React from 'react'
import './Home.css'
import imgHomeShop from'./shopimg.jpg'

export default function Home() {
  return (
    <div className='global-container' >
      <h1 className='home-title' >bienvenu au <span>Shop</span></h1>
      <img src={imgHomeShop} alt="acceuille"/>      
    </div>
  )
}
