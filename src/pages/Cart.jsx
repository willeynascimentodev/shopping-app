import { useContext, useEffect } from "react"
import CartContext from "../context/CartContext"
import ProductContext from "../context/ProductContext"
import CartItem from "../components/CartItem"
import Header from "../components/Header"
import Nav from "../components/Nav"
import { FaAngleRight } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"


function Cart() {

  const { totalPrice, cart, totalPriceCalc, clearCart } = useContext(CartContext)
  const navigate = useNavigate()

  useEffect(() => {
    totalPriceCalc()
  })

  const checkout = () => {
    clearCart()
    navigate('/order-placed')
  }

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
        onClick={ checkout  }
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
