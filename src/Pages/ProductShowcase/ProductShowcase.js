import React, {useState, useEffect, useRef} from 'react'
import './ProductShowcase.css'
import {useParams} from 'react-router-dom'
import inventory from './../../data/inventory';
import {useDispatch} from 'react-redux'

export default function ProductShowcase() {
  const [nbMugs, setNbMugs] = useState(1)

  const {id} = useParams()

  const productClicked = inventory.findIndex(obj => obj.title.replace(/\s+/g, '').trim() === id) 
  const dispatch = useDispatch();
  
  const updateMugs = (e) => {
    setNbMugs(e.target.value)    
  }

  const addToCart = (e) => {
   
    const itemAdded = {
      ...inventory[productClicked],
      quantity: nbMugs
    }
    dispatch({
      type: "ADDITEM",
      payload: itemAdded
    })
  }
 
  return (
    <div className='showcase' >
      <div className = 'container-img-showcase' >
        <img src={process.env.PUBLIC_URL + `/images/${inventory[productClicked].img}.png`} alt="produiut"/>        
      </div>
      <div className='product-infos' >
        <h2>{inventory[productClicked].price} €</h2>
        <form onSubmit={addToCart} >
          <label htmlFor="quantty">quantité</label>   
          <input type="number" id="quantity" value={nbMugs} onChange = {updateMugs} />
          <button>ajouter au panier </button>
          <span  className='adding-info' ></span>
        </form>        
      </div>       
    </div>
  )
}
