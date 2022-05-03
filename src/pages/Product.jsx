import { useContext, useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import ProductContext from "../context/ProductContext"
import CartContext from "../context/CartContext"
import Header from "../components/Header"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper'
import { FaAngleRight, FaAngleUp, FaAngleLeft } from 'react-icons/fa'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

function Product() {

  const { getProduct, isLoading, setIsloading, product } = useContext(ProductContext)
  const { addItem, getItem, deleteItem } = useContext(CartContext)
  const { productId } = useParams()
  const [textShare, setTextShare] = useState('SHARE THIS')

  useEffect( () => {
      getProduct(productId)
  }, [])
  
  const addToCart = () => {
    addItem(productId)
  }

  const removeFromCart = () => {
    deleteItem(productId)
  }
    
  const shareLink = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    setTextShare('COPIED LINK')
    setTimeout(() => {
      setTextShare('SHARE THIS')
    }, 2000)
  }

  return (
    <>
    <Header className="header"/>
    <div className="">
      <div className="contain-body">
        <h2> { product ? product.name : null }</h2>

        <Swiper pagination={{ clickable: true }}>
          { product.img?.map((img) => (
            <SwiperSlide key={ img }>
              <div
                className='swiperSlideDiv'
                style={{
                  background: `url(${img}) center no-repeat`,
                  backgroundSize: 'cover',
                  height: '200px',

                }}
              >

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <section className='price-section'>
          <strong className='price-text'>Price:</strong><br></br>
          <strong className='price-value'> { product.price } </strong>
        </section>


        <section className='desc-section'>
          <strong className='text-desc'>About this item:</strong><br></br>
          <p>
            { product.description }
          </p>
        </section>

        


    
   
      </div>
      <section className="btns-container">
        <button onClick={ shareLink } className='btn-left btn btn-sec'>  { textShare }  <span className='icon-btn'><FaAngleUp/></span> </button>
        { getItem(productId).length == 0 ? (
          <button 
            onClick={ addToCart }
            className='btn-right btn btn-pri'
          >
            ADD TO CART  <span className='icon-btn'><FaAngleRight/></span>
          </button>
        ) : (
          <button  
            onClick={ removeFromCart }
            className='btn-right btn btn-pri'
          >
            REMOVE ROM CART <span className='icon-btn'><FaAngleLeft/></span>
          </button>
        )}
      </section>
    </div>
    </>
  )
}

export default Product
