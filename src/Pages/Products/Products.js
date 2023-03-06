import React from 'react'
import './Products.css'
import { Link, NavLink } from 'react-router-dom';
import inventory from './../../data/inventory';

export default function Products() {
  return (
    <div className='container-products' >   
      {inventory.map((item) => {
        return <NavLink to = {{pathname: `/produits/${item.title.replace(/\s+/g, '').trim() }`,}} key = {item.id}>
          <div className='bloc-card' >
            <div className = "product-card" >
              <div className = 'visual-aspect' >
                <img src={process.env.PUBLIC_URL + `/images/${item.img}.png`} alt="produits" className='img-product' />                
              </div>
              <div className='info' >
                <p>{item.title}</p>
                <p> prix : {item.price} €</p>
                
              </div>
              
            </div>
            <div className='back-card' >
              
            </div>
            
          </div>

        </NavLink>
         
        
      })}
    </div>
  )
}
