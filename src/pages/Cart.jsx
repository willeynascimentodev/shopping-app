import { useContext, useEffect, useState } from "react"
import CartContext from "../context/CartContext"
import ProductContext from "../context/ProductContext"
import Product from "./Product"
import CartItem from "../components/CartItem"
import Header from "../components/Header"
import Nav from "../components/Nav"
import { FaAngleRight } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"
import Loading from "../components/Loading"


function Cart() {

  const { totalPrice, cart } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <>
  <Header />
  <div className="contain-body">
    <h1>Cart</h1>
    { 
      cart.map((item) => (
        <CartItem key={ item.id } item={ item }/>
      )) 
    }
        
  </div>
  <section style={{ bottom: '60px' }} className="btns-container">
    <div className='total-price-container'>
      <span>
        Total
      </span><br></br>
      <strong>{ totalPrice }</strong>
    </div>

    <button  
        onClick={ () => navigate('/order-placed')  }
        className='btn-right btn btn-pri'
      >
        CHECKOUT 
        <span className='icon-btn'><FaAngleRight/></span>
    </button>
  </section>
  <Nav />
  </>
  )
}

export default Cart
